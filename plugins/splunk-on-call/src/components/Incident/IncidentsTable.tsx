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
import Incident from '../../types';
import { IncidentPhaseStatus, incidentPhaseTooltip } from './IncidentListItem';
import { Link, Table, TableColumn } from '@backstage/core-components';
import {
  Tooltip,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';

const renderDisplayName = (incident: any): React.ReactNode => {
  return (
    <Link to={incident.incidentLink} target="_blank" rel="noreferrer">
      {incident.entityDisplayName}
    </Link>
  );
};

const transitionText = (transition: any): string => {
  return `${transition.name} at ${transition.at} by ${transition.by}`;
};

const renderTransitions = (incident: any): React.ReactNode => {
  return (
    <List dense>
      {incident.transitions!.map((transition, index) => (
        <ListItem dense key={incident.entityId}>
          <ListItemIcon>
            <Tooltip
              title={incidentPhaseTooltip(transition.name)}
              placement="top"
            >
              <div>
                <IncidentPhaseStatus currentPhase={transition.name} />
              </div>
            </Tooltip>
          </ListItemIcon>
          <ListItemText primary={transitionText(transition)} />
        </ListItem>
      ))}
    </List>
  );
};

const renderEntityState = (incident: any): React.ReactNode => {
  return (
    <Tooltip
      title={incidentPhaseTooltip(incident.currentPhase)}
      placement="top"
    >
      <div>
        <IncidentPhaseStatus currentPhase={incident.currentPhase} />
        {incident.entityState}
      </div>
    </Tooltip>
  );
};

export const IncidentsTable = ({ incidents }: { incidents: Incident[] }) => {
  const columns: TableColumn[] = [
    { title: 'Incident number', field: 'incidentNumber' },
    {
      title: 'State',
      field: 'entityState',
      render: incident => renderEntityState(incident),
    },
    {
      title: 'Display name',
      field: 'entityDisplayName',
      render: incident => renderDisplayName(incident),
    },
    { title: 'Start', field: 'startTime' },
    {
      title: 'Transitions',
      field: 'transitions',
      render: incident => renderTransitions(incident),
    },
    {
      title: 'Paged Teams',
      field: 'pagedTeams',
      render: incident => incident.pagedTeams.join(', '),
    },
    {
      title: 'Paged Users',
      field: 'pagedUsers',
      render: incident => incident.pagedUsers.join(', '),
    },
  ];

  return (
    <Table
      options={{
        search: true,
        paging: true,
        filtering: true,
        pageSize: 75,
      }}
      title="Splunk On-Call Incidents"
      columns={columns}
      data={incidents.sort(
        (x, y) => new Date(y.startTime) - new Date(x.startTime),
      )}
    />
  );
};
