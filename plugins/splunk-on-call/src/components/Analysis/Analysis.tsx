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
import { useTheme } from '@material-ui/core';
import {
  InfoCard,
  Gauge,
  Progress,
  TrendLine,
} from '@backstage/core-components';
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

export const Analysis = ({
  team,
  teamIncidents,
  totalIncidents,
}: {
  team: Team | undefined;
  teamIncidents: Incident[];
  totalIncidents: Incident[];
}) => {
  const theme = useTheme();
  const api = useApi(splunkOnCallApiRef);
  const date = new Date();
  date.setDate(date.getDate() - 6);
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
        await new Promise(resolve => setTimeout(resolve, 2000));
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
    const resolvedTeamIncidents = team
      ? value.filter(incident => {
          if (!team?.slug) {
            return false;
          }

          return incident?.pagedTeams?.includes(team?.slug);
        })
      : value;
    const teamGroupings = groupByDay(resolvedTeamIncidents);
    const teamRawTrends = Object.keys(teamGroupings).map(key => {
      return teamGroupings[key].length;
    });
    const teamCeiling = Math.max.apply(null, teamRawTrends);
    const teamTrends = teamRawTrends.map(trend => {
      return trend / teamCeiling;
    });

    const orgGroupings = groupByDay(value);
    const orgRawTrends = Object.keys(orgGroupings).map(key => {
      return orgGroupings[key].length;
    });
    const orgCeiling = Math.max.apply(null, orgRawTrends);
    const orgTrends = orgRawTrends.map(trend => {
      return trend / orgCeiling;
    });

    const resolvedSubheader = `${team?.name} assigned and resolved ${resolvedTeamIncidents.length}/${value.length} of your organization's incidents.`;
    const teamTrendSubheader = `${resolvedTeamIncidents.length} ${
      team?.name
    } incidents have been created and resolved since ${date.toUTCString()}.`;
    const orgTrendSubheader = `${
      value.length
    } total incidents have been created and resolved since ${date.toUTCString()} across your organization.`;
    const color = theme.palette.primary.light;

    const openTeamIncidents = teamIncidents?.filter(
      incident => incident.currentPhase !== 'RESOLVED',
    );
    const openOrgIncidents = totalIncidents?.filter(
      incident => incident.currentPhase !== 'RESOLVED',
    );
    const unresolvedSubheader = `${openTeamIncidents.length}/${openOrgIncidents?.length} unresolved incidents are assigned to ${team?.name}.`;

    return (
      <>
        <InfoCard title="Unresolved incidents" subheader={unresolvedSubheader}>
          <Gauge
            getColor={() => color}
            value={openTeamIncidents?.length / openOrgIncidents?.length}
          />
        </InfoCard>
        <InfoCard
          title={`Incidents resolved since ${date.toUTCString()}`}
          subheader={resolvedSubheader}
        >
          <Gauge
            getColor={() => color}
            value={teamIncidents?.length / value.length}
          />
        </InfoCard>
        <InfoCard title="One week team trend" subheader={teamTrendSubheader}>
          <TrendLine
            color={color}
            data={teamTrends}
            title={teamTrendSubheader}
          />
        </InfoCard>
        <InfoCard title="One week org trend" subheader={orgTrendSubheader}>
          <TrendLine color={color} data={orgTrends} title={orgTrendSubheader} />
        </InfoCard>
      </>
    );
  }

  return null;
};
