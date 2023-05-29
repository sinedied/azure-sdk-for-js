/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { FileSystemResource, QumuloStorage } from "@azure/arm-liftrqumulo";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a FileSystemResource
 *
 * @summary Create a FileSystemResource
 * x-ms-original-file: specification/liftrqumulo/resource-manager/Qumulo.Storage/stable/2022-10-12/examples/FileSystems_CreateOrUpdate_MaximumSet_Gen.json
 */
async function fileSystemsCreateOrUpdateMaximumSetGen() {
  const subscriptionId =
    process.env["LIFTRQUMULO_SUBSCRIPTION_ID"] || "ulseeqylxb";
  const resourceGroupName =
    process.env["LIFTRQUMULO_RESOURCE_GROUP"] || "rgQumulo";
  const fileSystemName = "nauwwbfoqehgbhdsmkewoboyxeqg";
  const resource: FileSystemResource = {
    adminPassword: "ekceujoecaashtjlsgcymnrdozk",
    availabilityZone: "maseyqhlnhoiwbabcqabtedbjpip",
    clusterLoginUrl: "jjqhgevy",
    delegatedSubnetId: "neqctctqdmjezfgt",
    identity: { type: "None", userAssignedIdentities: { key4522: {} } },
    initialCapacity: 9,
    location: "przdlsmlzsszphnixq",
    marketplaceDetails: {
      marketplaceSubscriptionId: "ujrcqvxfnhxxheoth",
      marketplaceSubscriptionStatus: "PendingFulfillmentStart",
      offerId: "eiyhbmpwgezcmzrrfoiskuxlcvwojf",
      planId: "x",
      publisherId: "wfmokfdjbwpjhz"
    },
    privateIPs: ["kslguxrwbwkrj"],
    provisioningState: "Accepted",
    storageSku: "Standard",
    tags: { key6565: "cgdhmupta" },
    userDetails: { email: "viptslwulnpaupfljvnjeq" }
  };
  const credential = new DefaultAzureCredential();
  const client = new QumuloStorage(credential, subscriptionId);
  const result = await client.fileSystems.beginCreateOrUpdateAndWait(
    resourceGroupName,
    fileSystemName,
    resource
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create a FileSystemResource
 *
 * @summary Create a FileSystemResource
 * x-ms-original-file: specification/liftrqumulo/resource-manager/Qumulo.Storage/stable/2022-10-12/examples/FileSystems_CreateOrUpdate_MinimumSet_Gen.json
 */
async function fileSystemsCreateOrUpdateMinimumSetGen() {
  const subscriptionId =
    process.env["LIFTRQUMULO_SUBSCRIPTION_ID"] || "aaaaaaaaaaaaaaaaaaaaaaaa";
  const resourceGroupName =
    process.env["LIFTRQUMULO_RESOURCE_GROUP"] || "rgopenapi";
  const fileSystemName = "aaaaaaaa";
  const resource: FileSystemResource = {
    adminPassword: "ekceujoecaashtjlsgcymnrdozk",
    delegatedSubnetId: "aaaaaaaaaa",
    initialCapacity: 9,
    location: "aaaaaaaaaaaaaaaaaaaaaaaaa",
    marketplaceDetails: {
      marketplaceSubscriptionId: "aaaaaaaaaaaaa",
      marketplaceSubscriptionStatus: "PendingFulfillmentStart",
      offerId: "aaaaaaaaaaaaaaaaaaaaaaaaa",
      planId: "aaaaaa",
      publisherId: "aa"
    },
    provisioningState: "Accepted",
    storageSku: "Standard",
    userDetails: { email: "viptslwulnpaupfljvnjeq" }
  };
  const credential = new DefaultAzureCredential();
  const client = new QumuloStorage(credential, subscriptionId);
  const result = await client.fileSystems.beginCreateOrUpdateAndWait(
    resourceGroupName,
    fileSystemName,
    resource
  );
  console.log(result);
}

async function main() {
  fileSystemsCreateOrUpdateMaximumSetGen();
  fileSystemsCreateOrUpdateMinimumSetGen();
}

main().catch(console.error);
