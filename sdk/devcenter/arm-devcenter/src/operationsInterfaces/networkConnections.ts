/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  NetworkConnection,
  NetworkConnectionsListBySubscriptionOptionalParams,
  NetworkConnectionsListByResourceGroupOptionalParams,
  HealthCheckStatusDetails,
  NetworkConnectionsListHealthDetailsOptionalParams,
  OutboundEnvironmentEndpoint,
  NetworkConnectionsListOutboundNetworkDependenciesEndpointsOptionalParams,
  NetworkConnectionsGetOptionalParams,
  NetworkConnectionsGetResponse,
  NetworkConnectionsCreateOrUpdateOptionalParams,
  NetworkConnectionsCreateOrUpdateResponse,
  NetworkConnectionUpdate,
  NetworkConnectionsUpdateOptionalParams,
  NetworkConnectionsUpdateResponse,
  NetworkConnectionsDeleteOptionalParams,
  NetworkConnectionsGetHealthDetailsOptionalParams,
  NetworkConnectionsGetHealthDetailsResponse,
  NetworkConnectionsRunHealthChecksOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a NetworkConnections. */
export interface NetworkConnections {
  /**
   * Lists network connections in a subscription
   * @param options The options parameters.
   */
  listBySubscription(
    options?: NetworkConnectionsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<NetworkConnection>;
  /**
   * Lists network connections in a resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: NetworkConnectionsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<NetworkConnection>;
  /**
   * Lists health check status details
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkConnectionName Name of the Network Connection that can be applied to a Pool.
   * @param options The options parameters.
   */
  listHealthDetails(
    resourceGroupName: string,
    networkConnectionName: string,
    options?: NetworkConnectionsListHealthDetailsOptionalParams
  ): PagedAsyncIterableIterator<HealthCheckStatusDetails>;
  /**
   * Lists the endpoints that agents may call as part of Dev Box service administration. These FQDNs
   * should be allowed for outbound access in order for the Dev Box service to function.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkConnectionName Name of the Network Connection that can be applied to a Pool.
   * @param options The options parameters.
   */
  listOutboundNetworkDependenciesEndpoints(
    resourceGroupName: string,
    networkConnectionName: string,
    options?: NetworkConnectionsListOutboundNetworkDependenciesEndpointsOptionalParams
  ): PagedAsyncIterableIterator<OutboundEnvironmentEndpoint>;
  /**
   * Gets a network connection resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkConnectionName Name of the Network Connection that can be applied to a Pool.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkConnectionName: string,
    options?: NetworkConnectionsGetOptionalParams
  ): Promise<NetworkConnectionsGetResponse>;
  /**
   * Creates or updates a Network Connections resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkConnectionName Name of the Network Connection that can be applied to a Pool.
   * @param body Represents network connection
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    networkConnectionName: string,
    body: NetworkConnection,
    options?: NetworkConnectionsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkConnectionsCreateOrUpdateResponse>,
      NetworkConnectionsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a Network Connections resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkConnectionName Name of the Network Connection that can be applied to a Pool.
   * @param body Represents network connection
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    networkConnectionName: string,
    body: NetworkConnection,
    options?: NetworkConnectionsCreateOrUpdateOptionalParams
  ): Promise<NetworkConnectionsCreateOrUpdateResponse>;
  /**
   * Partially updates a Network Connection
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkConnectionName Name of the Network Connection that can be applied to a Pool.
   * @param body Represents network connection
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    networkConnectionName: string,
    body: NetworkConnectionUpdate,
    options?: NetworkConnectionsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkConnectionsUpdateResponse>,
      NetworkConnectionsUpdateResponse
    >
  >;
  /**
   * Partially updates a Network Connection
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkConnectionName Name of the Network Connection that can be applied to a Pool.
   * @param body Represents network connection
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    networkConnectionName: string,
    body: NetworkConnectionUpdate,
    options?: NetworkConnectionsUpdateOptionalParams
  ): Promise<NetworkConnectionsUpdateResponse>;
  /**
   * Deletes a Network Connections resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkConnectionName Name of the Network Connection that can be applied to a Pool.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    networkConnectionName: string,
    options?: NetworkConnectionsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a Network Connections resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkConnectionName Name of the Network Connection that can be applied to a Pool.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    networkConnectionName: string,
    options?: NetworkConnectionsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets health check status details.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkConnectionName Name of the Network Connection that can be applied to a Pool.
   * @param options The options parameters.
   */
  getHealthDetails(
    resourceGroupName: string,
    networkConnectionName: string,
    options?: NetworkConnectionsGetHealthDetailsOptionalParams
  ): Promise<NetworkConnectionsGetHealthDetailsResponse>;
  /**
   * Triggers a new health check run. The execution and health check result can be tracked via the
   * network Connection health check details
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkConnectionName Name of the Network Connection that can be applied to a Pool.
   * @param options The options parameters.
   */
  beginRunHealthChecks(
    resourceGroupName: string,
    networkConnectionName: string,
    options?: NetworkConnectionsRunHealthChecksOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Triggers a new health check run. The execution and health check result can be tracked via the
   * network Connection health check details
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkConnectionName Name of the Network Connection that can be applied to a Pool.
   * @param options The options parameters.
   */
  beginRunHealthChecksAndWait(
    resourceGroupName: string,
    networkConnectionName: string,
    options?: NetworkConnectionsRunHealthChecksOptionalParams
  ): Promise<void>;
}
