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
import { Progress } from '@backstage/core-components';
import { splunkOnCallApiRef } from '../../api';
import { Incident } from '../types';

export const Analysis = () => {
  const api = useApi(splunkOnCallApiRef);

  const { value, loading, error } = useAsync(async () => {
    const date = new Date();
    date.setDate(date.getDate() - 7);
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

  return <>{JSON.stringify(value)}</>;
};
