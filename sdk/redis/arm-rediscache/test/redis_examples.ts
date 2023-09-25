/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  Recorder,
  RecorderStartOptions,
  delay,
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert } from "chai";
import { Context } from "mocha";
import { RedisManagementClient } from "../src/redisManagementClient";
import { NetworkManagementClient, VirtualNetwork } from "@azure/arm-network";

const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "azure_subscription_id"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables,
  sanitizerOptions: {
    bodySanitizers: [{
      regex: true,
      value: `fakeKey`,
      target: `[a-z0-9_A-z=]{40,100}`
    }],
    uriSanitizers: [{
      regex: true,
      value: `fakeKey`,
      target: `[a-z0-9_A-z=]{40,100}`
    }]
  }
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("Redis test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: RedisManagementClient;
  let network_client: NetworkManagementClient;
  let location: string;
  let resourceGroupName: string;
  let networkName: string;
  let subnetName: string;
  let name: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || "";
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new RedisManagementClient(credential, subscriptionId, recorder.configureClientOptions({}));
    network_client = new NetworkManagementClient(credential, subscriptionId, recorder.configureClientOptions({}));
    location = "eastus";
    resourceGroupName = "myjstest";
    networkName = "networknamex";
    subnetName = "subnetworknamex";
    name = "myrediscachexxx111";
  });

  afterEach(async function () {
    await recorder.stop();
  });

  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async function createVirtualNetwork(
    groupName: any,
    location: any,
    networkName: any,
    subnetName: any
  ) {
    const parameter: VirtualNetwork = {
      location: location,
      addressSpace: {
        addressPrefixes: ["10.0.0.0/16"],
      },
    };
    //network create
    const network_create = await network_client.virtualNetworks.beginCreateOrUpdateAndWait(groupName, networkName, parameter, testPollingOptions);
    //subnet create
    const subnet_info = await network_client.subnets.beginCreateOrUpdateAndWait(groupName, networkName, subnetName, { addressPrefix: "10.0.0.0/24" }, testPollingOptions);
  }

  it("Redis create test", async function () {
    //create network resource
    await createVirtualNetwork(resourceGroupName, location, networkName, subnetName);
    const res = await client.redis.beginCreateAndWait(resourceGroupName, name, {
      location: location,
      zones: [
        "1"
      ],
      sku: {
        name: "Premium",
        family: "P",
        capacity: 1
      },
      enableNonSslPort: true,
      shardCount: 2,
      redisConfiguration: {
        maxmemoryPolicy: "allkeys-lru"
      },
      subnetId: "/subscriptions/" + subscriptionId + "/resourceGroups/" + resourceGroupName + "/providers/Microsoft.Network/virtualNetworks/" + networkName + "/subnets/" + subnetName,
      staticIP: "10.0.0.5",
      minimumTlsVersion: "1.2"
    }, testPollingOptions);
    assert.equal(res.name, name);
  });

  it("redis get test", async function () {
    const res = await client.redis.get(resourceGroupName, name);
    assert.equal(res.name, name);
  });

  it("patchSchedules create for redis test", async function () {
    const res = await client.patchSchedules.createOrUpdate(resourceGroupName, name, "default", {
      scheduleEntries: [
        {
          dayOfWeek: "Monday",
          startHourUtc: 12,
          maintenanceWindow: "PT5H"
        },
        {
          dayOfWeek: "Tuesday",
          startHourUtc: 12
        }
      ]
    });
    assert.equal(res.type, "Microsoft.Cache/Redis/PatchSchedules");
  });

  it("patchSchedules listByRedisResource for redis test", async function () {
    const resArray = new Array();
    for await (let item of client.patchSchedules.listByRedisResource(resourceGroupName, name)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("redis listByResourceGroup test", async function () {
    const resArray = new Array();
    for await (let item of client.redis.listByResourceGroup(resourceGroupName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("redis update test", async function () {
    let count = 0;
    while (count < 20) {
      count++;
      const res = await client.redis.get(resourceGroupName, name);
      if (res.provisioningState == "Succeeded") {
        const res = await client.redis.beginUpdateAndWait(resourceGroupName, name, { enableNonSslPort: true }, testPollingOptions);
        assert.equal(res.enableNonSslPort, true);
        break;
      } else {
        // The resource is activating
        await delay(300000);
      }
    }
  }).timeout(3600000);

  it("patchSchedules delete for redis test", async function () {
    const res = await client.patchSchedules.delete(resourceGroupName, name, "default");
    // It's can not run patchSchedules.listByRedisResource after patchSchedules.delete operation
  });

  it("redis delete test", async function () {
    const res = await client.redis.beginDeleteAndWait(resourceGroupName, name, testPollingOptions);
    const resArray = new Array();
    for await (let item of client.redis.listByResourceGroup(resourceGroupName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
});
