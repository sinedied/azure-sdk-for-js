/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets information about all public IP addresses on a virtual machine scale set level.
 *
 * @summary Gets information about all public IP addresses on a virtual machine scale set level.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-11-01/examples/VmssPublicIpListAll.json
 */
async function listVmssPublicIP() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["NETWORK_RESOURCE_GROUP"] || "vmss-tester";
  const virtualMachineScaleSetName = "vmss1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.publicIPAddresses.listVirtualMachineScaleSetPublicIPAddresses(
    resourceGroupName,
    virtualMachineScaleSetName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listVmssPublicIP();
}

main().catch(console.error);
