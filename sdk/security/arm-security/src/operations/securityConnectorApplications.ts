/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { SecurityConnectorApplications } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  Application,
  SecurityConnectorApplicationsListNextOptionalParams,
  SecurityConnectorApplicationsListOptionalParams,
  SecurityConnectorApplicationsListResponse,
  SecurityConnectorApplicationsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SecurityConnectorApplications operations. */
export class SecurityConnectorApplicationsImpl
  implements SecurityConnectorApplications {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class SecurityConnectorApplications class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Get a list of all relevant applications over a security connector level scope
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param securityConnectorName The security connector name.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    securityConnectorName: string,
    options?: SecurityConnectorApplicationsListOptionalParams
  ): PagedAsyncIterableIterator<Application> {
    const iter = this.listPagingAll(
      resourceGroupName,
      securityConnectorName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          securityConnectorName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    securityConnectorName: string,
    options?: SecurityConnectorApplicationsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Application[]> {
    let result: SecurityConnectorApplicationsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        securityConnectorName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        securityConnectorName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    securityConnectorName: string,
    options?: SecurityConnectorApplicationsListOptionalParams
  ): AsyncIterableIterator<Application> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      securityConnectorName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get a list of all relevant applications over a security connector level scope
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param securityConnectorName The security connector name.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    securityConnectorName: string,
    options?: SecurityConnectorApplicationsListOptionalParams
  ): Promise<SecurityConnectorApplicationsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, securityConnectorName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param securityConnectorName The security connector name.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    securityConnectorName: string,
    nextLink: string,
    options?: SecurityConnectorApplicationsListNextOptionalParams
  ): Promise<SecurityConnectorApplicationsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, securityConnectorName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/securityConnectors/{securityConnectorName}/providers/Microsoft.Security/applications",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationsList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion17],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.securityConnectorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationsList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.securityConnectorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
