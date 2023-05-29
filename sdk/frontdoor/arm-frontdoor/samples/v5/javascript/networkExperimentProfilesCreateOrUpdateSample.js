/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { FrontDoorManagementClient } = require("@azure/arm-frontdoor");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates an NetworkExperiment Profile
 *
 * @summary Creates an NetworkExperiment Profile
 * x-ms-original-file: specification/frontdoor/resource-manager/Microsoft.Network/stable/2019-11-01/examples/NetworkExperimentCreateProfile.json
 */
async function createsAnNetworkExperimentProfileInAResourceGroup() {
  const subscriptionId = process.env["FRONTDOOR_SUBSCRIPTION_ID"] || "subid";
  const profileName = "MyProfile";
  const resourceGroupName = process.env["FRONTDOOR_RESOURCE_GROUP"] || "MyResourceGroup";
  const parameters = { enabledState: "Enabled", location: "WestUs" };
  const credential = new DefaultAzureCredential();
  const client = new FrontDoorManagementClient(credential, subscriptionId);
  const result = await client.networkExperimentProfiles.beginCreateOrUpdateAndWait(
    profileName,
    resourceGroupName,
    parameters
  );
  console.log(result);
}

async function main() {
  createsAnNetworkExperimentProfileInAResourceGroup();
}

main().catch(console.error);
