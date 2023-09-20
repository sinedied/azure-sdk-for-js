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
  RedisRebootParameters,
  RedisManagementClient
} from "@azure/arm-rediscache";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Reboot specified Redis node(s). This operation requires write permission to the cache resource. There can be potential data loss.
 *
 * @summary Reboot specified Redis node(s). This operation requires write permission to the cache resource. There can be potential data loss.
 * x-ms-original-file: specification/redis/resource-manager/Microsoft.Cache/stable/2023-08-01/examples/RedisCacheForceReboot.json
 */
async function redisCacheForceReboot() {
  const subscriptionId = process.env["REDIS_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["REDIS_RESOURCE_GROUP"] || "rg1";
  const name = "cache1";
  const parameters: RedisRebootParameters = {
    ports: [13000, 15001],
    rebootType: "AllNodes",
    shardId: 0
  };
  const credential = new DefaultAzureCredential();
  const client = new RedisManagementClient(credential, subscriptionId);
  const result = await client.redis.forceReboot(
    resourceGroupName,
    name,
    parameters
  );
  console.log(result);
}

async function main() {
  redisCacheForceReboot();
}

main().catch(console.error);
