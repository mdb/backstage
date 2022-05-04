/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import useAsync from 'react-use/lib/useAsync';
import { useApi } from '@backstage/core-plugin-api';
import { Alert } from '@material-ui/lab';
import { Progress, TrendLine } from '@backstage/core-components';
import { splunkOnCallApiRef } from '../../api';
import { Incident, Team } from '../types';

const groupByDay = (incidents: Incident[]) => {
  const groupings: Record<string, Incident[]> = {};

  incidents.reduce((r, a) => {
    const startTime = new Date(a.startTime || '');
    const date = startTime.getDate();
    const year = startTime.getFullYear();
    const month = startTime.getMonth();
    const formattedDate = `${year}-${month}-${date}`;

    groupings[formattedDate] = [...(groupings[formattedDate] || []), a];

    return r;
  });

  return groupings;
};

export const Analysis = ({ team }: { team: Team | undefined }) => {
  const api = useApi(splunkOnCallApiRef);
  const date = new Date();
  date.setDate(date.getDate() - 7);
  const { value, loading, error } = useAsync(async () => {
    const limit = 100;

    const getReportingPage = async (offset: number) => {
      return await api.getIncidentsReporting({
        startedAfter: date.toISOString(),
        limit,
        offset,
      });
    };

    const getIncidentReporting = async () => {
      const incidents: Incident[] = [];
      let morePages = true;
      let offset = 0;

      while (morePages) {
        const response = await getReportingPage(offset);
        await incidents.push.apply(incidents, response.incidents);

        offset += limit;

        if (
          response.incidents.length >= response.total ||
          !response.incidents.length
        ) {
          morePages = false;
        }
      }

      return incidents;
    };

    return getIncidentReporting();
  });

  if (loading) {
    return <Progress />;
  }

  if (error) {
    return (
      <Alert severity="error">
        Error encountered while fetching incident reporting. {error.message}
      </Alert>
    );
  }

  if (value) {
    const teamIncidents = team
      ? value.filter(incident => {
          if (!team?.slug) {
            return false;
          }

          return incident?.pagedTeams?.includes(team?.slug);
        })
      : value;
    const groupings = groupByDay(teamIncidents);
    const rawTrends = Object.keys(groupings).map(key => {
      return groupings[key].length;
    });
    const ceiling = Math.max.apply(null, rawTrends);
    const trends = rawTrends.map(trend => {
      return trend / ceiling;
    });
    const headingPrefix = team ? team.name : 'Your organization';

    return (
      <>
        {headingPrefix} resolved {teamIncidents.length} incidents between{' '}
        {date.toUTCString()} and now
        <TrendLine
          color="blue"
          data={trends}
          title="Incidents over the last week"
        />
      </>
    );
  }

  return null;
};
