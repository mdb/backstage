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
import { Incident } from '../types';
import { IncidentPhaseStatus, incidentPhaseTooltip } from './IncidentListItem';
import { Link, Table, TableColumn } from '@backstage/core-components';
import {
  Tooltip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { DateTime, Duration } from 'luxon';

const relativeTime = (time: string): string | null => {
  const duration = new Date().getTime() - new Date(time!).getTime();

  return DateTime.local()
    .minus(Duration.fromMillis(duration))
    .toRelative({ locale: 'en' });
};

const displayName = (incident: any): React.ReactNode => {
  return (
    <>
      <Link to={incident.incidentLink} target="_blank" rel="noreferrer">
        {incident.entityDisplayName}
      </Link>
      <Typography noWrap variant="body2" color="textSecondary">
        Created {relativeTime(incident.startTime)}
      </Typography>
    </>
  );
};

const transitionText = (transition: any): string => {
  return `${transition.name} at ${relativeTime(transition.at)} by ${
    transition.by
  }`;
};

const transitions = (incident: any, classes: any): React.ReactNode => {
  return (
    <List dense>
      {incident.transitions!.map((transition: any, index: number) => (
        <ListItem dense key={index}>
          <ListItemIcon className={classes.listItemIcon}>
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

const entityState = (incident: any): React.ReactNode => {
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
  const useStyles = makeStyles({
    listItemIcon: {
      minWidth: '1em',
    },
  });
  const classes = useStyles();
  const columns: TableColumn[] = [
    { title: 'Incident number', field: 'incidentNumber' },
    {
      title: 'State',
      field: 'entityState',
      render: incident => entityState(incident),
    },
    {
      title: 'Display name',
      field: 'entityDisplayName',
      render: incident => displayName(incident),
    },
    { title: 'Start', field: 'startTime' },
    {
      title: 'Transitions',
      field: 'transitions',
      render: incident => transitions(incident, classes),
    },
    {
      title: 'Paged Teams',
      field: 'pagedTeams',
      render: incident => {
        const inc = incident as Incident;

        return inc.pagedTeams?.join(', ');
      },
    },
    {
      title: 'Paged Users',
      field: 'pagedUsers',
      render: incident => {
        const inc = incident as Incident;

        return inc.pagedUsers?.join(', ');
      },
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
        (x, y) =>
          new Date(y.startTime || 0).getTime() -
          new Date(x.startTime || 0).getTime(),
      )}
    />
  );
};
