/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates or updates a Virtual Network Tap.
 *
 * @summary Creates or updates a Virtual Network Tap.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-05-01/examples/VirtualNetworkTapCreate.json
 */
async function createVirtualNetworkTap() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const tapName = "test-vtap";
  const parameters = {
    destinationNetworkInterfaceIPConfiguration: {
      id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/networkInterfaces/testNetworkInterface/ipConfigurations/ipconfig1",
    },
    location: "centraluseuap",
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworkTaps.beginCreateOrUpdateAndWait(
    resourceGroupName,
    tapName,
    parameters
  );
  console.log(result);
}

async function main() {
  createVirtualNetworkTap();
}

main().catch(console.error);
