/*
 * Copyright 2020 The Backstage Authors
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
import {
  Content,
  ContentHeader,
  Header,
  Link,
  Page,
  Progress,
  SupportButton,
  Table,
  TableColumn,
} from '@backstage/core-components';
import Alert from '@material-ui/lab/Alert';
import { splunkOnCallApiRef } from '../api';
import { useApi } from '@backstage/core-plugin-api';
import { EscalationPolicyInfo, Incident } from './types';

const renderIncidentNumber = (incident: any): React.ReactNode => {
  return (
    <Link to={`${incident.incidentLink}`} target="_blank" rel="noreferrer">
      {incident.incidentNumber}
    </Link>
  );
};

const renderPagedPolicies = (incident: any): React.ReactNode => {
  if (!incident.pagedPolicies) {
    return '';
  }

  return incident.pagedPolicies
    .map((policy: EscalationPolicyInfo) => {
      const team = policy.team ? policy.team.name : '';
      const policyName = policy.policy.name;

      return `Policy name: ${policyName}, Team: ${team}`;
    })
    .join(', ');
};

// filter out resolved incidents & order descending by startTime
const sortedIncidents = (incidents: Incident[] | undefined): Incident[] => {
  if (!incidents) {
    return [];
  }

  return incidents
    .filter(val => val.currentPhase.toLocaleLowerCase('en-US') !== 'resolved')
    .sort((a, b) => {
      const aStart = a.startTime ? a.startTime : '';
      const bStart = b.startTime ? b.startTime : '';

      return Date.parse(bStart) - Date.parse(aStart);
    });
};

const IncidentsTable = (): JSX.Element => {
  const api = useApi(splunkOnCallApiRef);
  const { value, loading, error } = useAsync(async () => {
    return await api.getIncidents();
  });

  const columns: TableColumn[] = [
    {
      title: 'State',
      field: 'entityState',
    },
    {
      title: 'Number',
      field: 'Number',
      render: incident => renderIncidentNumber(incident),
    },
    {
      title: 'Display Name',
      field: 'entityDisplayName',
    },
    {
      title: 'Start Time',
      field: 'startTime',
    },
    {
      title: 'Phase',
      field: 'currentPhase',
    },
    {
      title: 'Paged Policies',
      field: 'pagedPolicies',
      render: incident => renderPagedPolicies(incident),
    },
    {
      title: 'Routing Key',
      field: 'routingKey',
    },
  ];

  if (loading) {
    return <Progress />;
  }

  if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }

  const data = sortedIncidents(value);

  return (
    <Table
      title="title"
      options={{ search: true, paging: false, filtering: true }}
      columns={columns}
      data={data}
    />
  );
};

export type SplunkOnCallIncidentsPageProps = {
  title?: string;
  subtitle?: string;
  pageTitle?: string;
};

export const SplunkOnCallIncidentsPage = ({
  title,
  subtitle,
  pageTitle,
}: SplunkOnCallIncidentsPageProps): JSX.Element => {
  return (
    <Page themeId="tool">
      <Header title={title} subtitle={subtitle} />
      <Content>
        <ContentHeader title={pageTitle}>
          <SupportButton>
            Browse non-resolved Splunk On Call incidents.
          </SupportButton>
        </ContentHeader>
        <IncidentsTable />
      </Content>
    </Page>
  );
};

SplunkOnCallIncidentsPage.defaultProps = {
  title: 'Splunk On-Call Incidents',
  subtitle: 'Open incidents',
  pageTitle: 'Dashboard',
};
