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
  TopicSpace,
  TopicSpacesListByNamespaceOptionalParams,
  TopicSpacesGetOptionalParams,
  TopicSpacesGetResponse,
  TopicSpacesCreateOrUpdateOptionalParams,
  TopicSpacesCreateOrUpdateResponse,
  TopicSpacesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a TopicSpaces. */
export interface TopicSpaces {
  /**
   * Get all the topic spaces under a namespace.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param options The options parameters.
   */
  listByNamespace(
    resourceGroupName: string,
    namespaceName: string,
    options?: TopicSpacesListByNamespaceOptionalParams
  ): PagedAsyncIterableIterator<TopicSpace>;
  /**
   * Get properties of a topic space.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicSpaceName Name of the Topic space.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    namespaceName: string,
    topicSpaceName: string,
    options?: TopicSpacesGetOptionalParams
  ): Promise<TopicSpacesGetResponse>;
  /**
   * Create or update a topic space with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicSpaceName The topic space name.
   * @param topicSpaceInfo Topic space information.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    namespaceName: string,
    topicSpaceName: string,
    topicSpaceInfo: TopicSpace,
    options?: TopicSpacesCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<TopicSpacesCreateOrUpdateResponse>,
      TopicSpacesCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a topic space with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicSpaceName The topic space name.
   * @param topicSpaceInfo Topic space information.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    namespaceName: string,
    topicSpaceName: string,
    topicSpaceInfo: TopicSpace,
    options?: TopicSpacesCreateOrUpdateOptionalParams
  ): Promise<TopicSpacesCreateOrUpdateResponse>;
  /**
   * Delete an existing topic space.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicSpaceName Name of the Topic space.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    namespaceName: string,
    topicSpaceName: string,
    options?: TopicSpacesDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete an existing topic space.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicSpaceName Name of the Topic space.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    namespaceName: string,
    topicSpaceName: string,
    options?: TopicSpacesDeleteOptionalParams
  ): Promise<void>;
}
