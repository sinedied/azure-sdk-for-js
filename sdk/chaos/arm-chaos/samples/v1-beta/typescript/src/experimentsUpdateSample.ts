/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ExperimentUpdate, ChaosManagementClient } from "@azure/arm-chaos";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The operation to update an experiment.
 *
 * @summary The operation to update an experiment.
 * x-ms-original-file: specification/chaos/resource-manager/Microsoft.Chaos/preview/2023-04-15-preview/examples/PatchExperiment.json
 */
async function patchAnExperimentInAResourceGroup() {
  const subscriptionId =
    process.env["CHAOS_SUBSCRIPTION_ID"] ||
    "6b052e15-03d3-4f17-b2e1-be7f07588291";
  const resourceGroupName = process.env["CHAOS_RESOURCE_GROUP"] || "exampleRG";
  const experimentName = "exampleExperiment";
  const experiment: ExperimentUpdate = {
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/6b052e1503d34f17B2e1Be7f07588291/resourceGroups/exampleRG/providers/MicrosoftManagedIdentity/userAssignedIdentity/exampleUMI": {}
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ChaosManagementClient(credential, subscriptionId);
  const result = await client.experiments.update(
    resourceGroupName,
    experimentName,
    experiment
  );
  console.log(result);
}

async function main() {
  patchAnExperimentInAResourceGroup();
}

main().catch(console.error);
