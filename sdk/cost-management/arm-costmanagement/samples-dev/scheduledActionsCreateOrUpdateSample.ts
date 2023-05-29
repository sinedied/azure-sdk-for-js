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
  ScheduledAction,
  ScheduledActionsCreateOrUpdateOptionalParams,
  CostManagementClient
} from "@azure/arm-costmanagement";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update a private scheduled action.
 *
 * @summary Create or update a private scheduled action.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/scheduledActions/scheduledAction-createOrUpdate-private.json
 */
async function createOrUpdatePrivateScheduledAction() {
  const name = "monthlyCostByResource";
  const ifMatch = "";
  const scheduledAction: ScheduledAction = {
    displayName: "Monthly Cost By Resource",
    kind: "Email",
    notification: {
      subject: "Cost by resource this month",
      to: ["user@gmail.com", "team@gmail.com"]
    },
    schedule: {
      daysOfWeek: ["Monday"],
      endDate: new Date("2021-06-19T22:21:51.1287144Z"),
      frequency: "Monthly",
      hourOfDay: 10,
      startDate: new Date("2020-06-19T22:21:51.1287144Z"),
      weeksOfMonth: ["First", "Third"]
    },
    status: "Enabled",
    viewId: "/providers/Microsoft.CostManagement/views/swaggerExample"
  };
  const options: ScheduledActionsCreateOrUpdateOptionalParams = { ifMatch };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.scheduledActions.createOrUpdate(
    name,
    scheduledAction,
    options
  );
  console.log(result);
}

async function main() {
  createOrUpdatePrivateScheduledAction();
}

main().catch(console.error);
