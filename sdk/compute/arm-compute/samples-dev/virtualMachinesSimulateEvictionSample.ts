/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The operation to simulate the eviction of spot virtual machine.
 *
 * @summary The operation to simulate the eviction of spot virtual machine.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2023-03-01/examples/virtualMachineExamples/VirtualMachine_SimulateEviction.json
 */
async function simulateEvictionAVirtualMachine() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "ResourceGroup";
  const vmName = "VMName";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachines.simulateEviction(
    resourceGroupName,
    vmName
  );
  console.log(result);
}

async function main() {
  simulateEvictionAVirtualMachine();
}

main().catch(console.error);
