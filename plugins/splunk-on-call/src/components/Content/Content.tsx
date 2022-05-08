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
import { CardTab, TabbedCard } from '@backstage/core-components';
import { Team } from '../types';
import { Incidents } from '../Incident';
import { EscalationPolicy } from '../Escalation';
import { Analysis } from '../Analysis';

export const Content = ({
  team,
  usersHashMap,
  readOnly,
  refreshIncidents,
}: {
  team: Team | undefined;
  usersHashMap: any;
  readOnly?: boolean;
  refreshIncidents: boolean;
}) => {
  const teamName = team?.name ?? '';

  return (
    <TabbedCard>
      <CardTab label="Incidents">
        <Incidents
          readOnly={readOnly || false}
          team={teamName}
          refreshIncidents={refreshIncidents}
        />
        {usersHashMap && team && (
          <EscalationPolicy team={teamName} users={usersHashMap} />
        )}
      </CardTab>
      <CardTab label="Analysis">
        <Analysis team={team} />
      </CardTab>
    </TabbedCard>
  );
};
