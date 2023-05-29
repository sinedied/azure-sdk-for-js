/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  DaprComponent,
  ContainerAppsAPIClient
} from "@azure/arm-appcontainers";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a Dapr Component in a Managed Environment.
 *
 * @summary Creates or updates a Dapr Component in a Managed Environment.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-11-01-preview/examples/DaprComponents_CreateOrUpdate_SecretStoreComponent.json
 */
async function createOrUpdateDaprComponentWithSecretStoreComponent() {
  const subscriptionId =
    process.env["APPCONTAINERS_SUBSCRIPTION_ID"] ||
    "8efdecc5-919e-44eb-b179-915dca89ebf9";
  const resourceGroupName =
    process.env["APPCONTAINERS_RESOURCE_GROUP"] || "examplerg";
  const environmentName = "myenvironment";
  const componentName = "reddog";
  const daprComponentEnvelope: DaprComponent = {
    componentType: "state.azure.cosmosdb",
    ignoreErrors: false,
    initTimeout: "50s",
    metadata: [
      { name: "url", value: "<COSMOS-URL>" },
      { name: "database", value: "itemsDB" },
      { name: "collection", value: "items" },
      { name: "masterkey", secretRef: "masterkey" }
    ],
    scopes: ["container-app-1", "container-app-2"],
    secretStoreComponent: "my-secret-store",
    version: "v1"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.daprComponents.createOrUpdate(
    resourceGroupName,
    environmentName,
    componentName,
    daprComponentEnvelope
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a Dapr Component in a Managed Environment.
 *
 * @summary Creates or updates a Dapr Component in a Managed Environment.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2022-11-01-preview/examples/DaprComponents_CreateOrUpdate_Secrets.json
 */
async function createOrUpdateDaprComponentWithSecrets() {
  const subscriptionId =
    process.env["APPCONTAINERS_SUBSCRIPTION_ID"] ||
    "8efdecc5-919e-44eb-b179-915dca89ebf9";
  const resourceGroupName =
    process.env["APPCONTAINERS_RESOURCE_GROUP"] || "examplerg";
  const environmentName = "myenvironment";
  const componentName = "reddog";
  const daprComponentEnvelope: DaprComponent = {
    componentType: "state.azure.cosmosdb",
    ignoreErrors: false,
    initTimeout: "50s",
    metadata: [
      { name: "url", value: "<COSMOS-URL>" },
      { name: "database", value: "itemsDB" },
      { name: "collection", value: "items" },
      { name: "masterkey", secretRef: "masterkey" }
    ],
    scopes: ["container-app-1", "container-app-2"],
    secrets: [{ name: "masterkey", value: "keyvalue" }],
    version: "v1"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.daprComponents.createOrUpdate(
    resourceGroupName,
    environmentName,
    componentName,
    daprComponentEnvelope
  );
  console.log(result);
}

async function main() {
  createOrUpdateDaprComponentWithSecretStoreComponent();
  createOrUpdateDaprComponentWithSecrets();
}

main().catch(console.error);
