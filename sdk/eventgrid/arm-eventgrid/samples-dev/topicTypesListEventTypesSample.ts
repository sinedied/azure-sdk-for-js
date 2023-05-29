/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { EventGridManagementClient } from "@azure/arm-eventgrid";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List event types for a topic type.
 *
 * @summary List event types for a topic type.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2023-06-01-preview/examples/TopicTypes_ListEventTypes.json
 */
async function topicTypesListEventTypes() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const topicTypeName = "Microsoft.Storage.StorageAccounts";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.topicTypes.listEventTypes(topicTypeName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  topicTypesListEventTypes();
}

main().catch(console.error);
