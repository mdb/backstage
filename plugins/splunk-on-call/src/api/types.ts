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

import {
  EscalationPolicyInfo,
  Incident,
  OnCall,
  RoutingKey,
  Team,
  User,
} from '../components/types';
import { DiscoveryApi } from '@backstage/core-plugin-api';

export type MessageType =
  | 'CRITICAL'
  | 'WARNING'
  | 'ACKNOWLEDGEMENT'
  | 'INFO'
  | 'RECOVERY';

export type TriggerAlarmRequest = {
  routingKey?: string;
  incidentType: MessageType;
  incidentId?: string;
  incidentDisplayName?: string;
  incidentMessage?: string;
  incidentStartTime?: number;
};

export interface SplunkOnCallApi {
  /**
   * Fetches a list of incidents
   */
  getIncidents(): Promise<Incident[]>;

  /**
   * Fetches the list of users in an escalation policy.
   */
  getOnCallUsers(): Promise<OnCall[]>;

  /**
   * Triggers-Resolves-Acknowledge an incident.
   */
  incidentAction(request: TriggerAlarmRequest): Promise<Response>;

  /**
   * Get a list of users for your organization.
   */
  getUsers(): Promise<User[]>;

  /**
   * Get a list of teams for your organization.
   */
  getTeams(): Promise<Team[]>;

  /**
   * Get a list of routing keys for your organization.
   */
  getRoutingKeys(): Promise<RoutingKey[]>;

  /**
   * Get a list of escalation policies for your organization.
   */
  getEscalationPolicies(): Promise<EscalationPolicyInfo[]>;

  /**
   * Get incident history for your organization, searching over date ranges with filtering options.
   */
  getIncidentsReporting(
    params: IncidentsReportingParams,
  ): Promise<IncidentsReportingResponse>;
}

export type EscalationPolicyResponse = {
  policies: EscalationPolicyInfo[];
};

export type ListUserResponse = {
  users: User[];
  _selfUrl?: string;
};

export type ListRoutingKeyResponse = {
  routingKeys: RoutingKey[];
  _selfUrl?: string;
};

export type IncidentsResponse = {
  incidents: Incident[];
};

export type OnCallsResponse = {
  teamsOnCall: OnCall[];
};

export type IncidentsReportingParams = {
  // example: 2018-01-04T02:09:26Z
  startedAfter?: string;
  // example: 2018-01-04T02:09:26Z
  startedBefore?: string;
  service?: string;
  routingKey?: string;
  limit?: number;
  offset?: number;
};

export type IncidentsReportingResponse = {
  offset: number;
  limit: number;
  total: number;
  incidents: Incident[];
};

export type ClientApiConfig = {
  eventsRestEndpoint: string | null;
  discoveryApi: DiscoveryApi;
};

export type RequestOptions = {
  method: string;
  headers: HeadersInit;
  body?: BodyInit;
};
