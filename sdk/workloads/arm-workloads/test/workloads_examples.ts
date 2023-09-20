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
import { WorkloadsClient } from "../src/workloadsClient"
import { Monitor } from "../src/models";

const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "azure_subscription_id"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("workloads test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: WorkloadsClient;
  let resourceGroup: string;
  let monitorName: string;
  let monitorParameter: Monitor;
  let sapVirtualInstanceName: string;
  let location: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new WorkloadsClient(credential, subscriptionId, recorder.configureClientOptions({}));
    resourceGroup = "myjstest";
    monitorName = "myMonitor";
    sapVirtualInstanceName = "O13";
    location = "eastus2"
  });

  afterEach(async function () {
    await recorder.stop();
  });

  //create monitors
  it("Workloads create test", async function () {
    monitorParameter = {
      appLocation: "eastus2",
      location: "eastus2",
      logAnalyticsWorkspaceArmId:
        "/subscriptions/" + subscriptionId + "/resourcegroups/myjstest/providers/microsoft.operationalinsights/workspaces/myWorkspace",
      managedResourceGroupConfiguration: { name: "myManagedRg" },
      monitorSubnet:
        "/subscriptions/" + subscriptionId + "/resourceGroups/myjstest/providers/Microsoft.Network/virtualNetworks/virtualnetworkabc/subnets/mySubnet",
      routingPreference: "RouteAll",
      tags: { key: "value" }
    };
    const res = await client.monitors.beginCreateAndWait(resourceGroup, monitorName, monitorParameter, testPollingOptions)
    assert.equal(res.name, monitorName);
  });

  //create svi
  it.skip("svi create test", async function () {
    const subnetId = "/subscriptions/" + subscriptionId + "/resourceGroups/myjstest/providers/Microsoft.Networks/virtualNetworks/networknamex/subnets/subnetworknamex"
    const res = await client.sAPVirtualInstances.beginCreateAndWait(
      resourceGroup,
      sapVirtualInstanceName,
      {
        body: {
          configuration: {
            appLocation: location,
            configurationType: "DeploymentWithOSConfig",
            infrastructureConfiguration: {
              appResourceGroup: resourceGroup,
              databaseType: "HANA",
              deploymentType: "SingleServer",
              networkConfiguration: { isSecondaryIpEnabled: true },
              subnetId,
              virtualMachineConfiguration: {
                imageReference: {
                  offer: "RHEL-SAP-HA",
                  publisher: "RedHat",
                  sku: "82sapha-gen2",
                  version: "latest"
                },
                osProfile: {
                  adminUsername: "testuser",
                  osConfiguration: {
                    disablePasswordAuthentication: true,
                    osType: "Linux",
                    sshKeyPair: {
                      publicKey: "",
                      privateKey: ""
                    }
                  }
                },
                vmSize: "Standard_E32ds_v4"
              }
            },
            osSapConfiguration: { sapFqdn: "sap.test.com" },
          },
          environment: "NonProd",
          location,
          sapProduct: "S4HANA",
          tags: {},
          managedResourceGroupConfiguration: {
            "name": "mrg-Y13-bf4ab3"
          }
        },
        updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
      }
    );
    assert.equal(res.name, monitorName);
  }).timeout(3600000);

  //get svi
  it.skip("svi get test", async function () {
    //get monitors from workloads
    const res = await client.sAPVirtualInstances.get(resourceGroup, sapVirtualInstanceName);
    assert.equal(res.name, sapVirtualInstanceName);
  });

  //get monitors
  it("Workloads get test", async function () {
    //get monitors from workloads
    const res = await client.monitors.get(resourceGroup, monitorName);
    assert.equal(res.name, monitorName);
  });

  //list Workloads
  it("Workloads list test", async function () {
    //list monitors from workloads
    const res = await client.monitors.list()
    const resArray = [];
    for await (let item of res) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  //delete monitors
  it("Workloads delete test", async function () {
    const res = await client.monitors.beginDeleteAndWait(resourceGroup, monitorName, testPollingOptions);
    const resArray = new Array();
    for await (let item of client.monitors.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });

  //delete svi
  it.skip("svi delete test", async function () {
    const res = await client.sAPVirtualInstances.beginDeleteAndWait(resourceGroup, sapVirtualInstanceName, testPollingOptions);
    const resArray = new Array();
    for await (let item of client.sAPVirtualInstances.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });
});
