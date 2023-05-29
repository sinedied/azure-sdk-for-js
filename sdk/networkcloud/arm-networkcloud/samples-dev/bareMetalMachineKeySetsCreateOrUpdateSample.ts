/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { BareMetalMachineKeySet, NetworkCloud } from "@azure/arm-networkcloud";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a new bare metal machine key set or update the existing one for the provided cluster.
 *
 * @summary Create a new bare metal machine key set or update the existing one for the provided cluster.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/preview/2022-12-12-preview/examples/BareMetalMachineKeySets_Create.json
 */
async function createOrUpdateBareMetalMachineKeySetOfCluster() {
  const subscriptionId =
    process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName =
    process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const clusterName = "clusterName";
  const bareMetalMachineKeySetName = "bareMetalMachineKeySetName";
  const bareMetalMachineKeySetParameters: BareMetalMachineKeySet = {
    azureGroupId: "f110271b-XXXX-4163-9b99-214d91660f0e",
    expiration: new Date("2022-12-31T23:59:59.008Z"),
    extendedLocation: {
      name:
        "/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterExtendedLocationName",
      type: "CustomLocation"
    },
    jumpHostsAllowed: ["192.0.2.1", "192.0.2.5"],
    location: "location",
    osGroupName: "standardAccessGroup",
    privilegeLevel: "Standard",
    tags: { key1: "myvalue1", key2: "myvalue2" },
    userList: [
      {
        description:
          "Needs access for troubleshooting as a part of the support team",
        azureUserName: "userABC",
        sshPublicKey: {
          keyData:
            "ssh-rsa AAtsE3njSONzDYRIZv/WLjVuMfrUSByHp+jfaaOLHTIIB4fJvo6dQUZxE20w2iDHV3tEkmnTo84eba97VMueQD6OzJPEyWZMRpz8UYWOd0IXeRqiFu1lawNblZhwNT/ojNZfpB3af/YDzwQCZgTcTRyNNhL4o/blKUmug0daSsSXISTRnIDpcf5qytjs1Xo+yYyJMvzLL59mhAyb3p/cD+Y3/s3WhAx+l0XOKpzXnblrv9d3q4c2tWmm/SyFqthaqd0= admin@vm"
        }
      },
      {
        description:
          "Needs access for troubleshooting as a part of the support team",
        azureUserName: "userXYZ",
        sshPublicKey: {
          keyData:
            "ssh-rsa AAtsE3njSONzDYRIZv/WLjVuMfrUSByHp+jfaaOLHTIIB4fJvo6dQUZxE20w2iDHV3tEkmnTo84eba97VMueQD6OzJPEyWZMRpz8UYWOd0IXeRqiFu1lawNblZhwNT/ojNZfpB3af/YDzwQCZgTcTRyNNhL4o/blKUmug0daSsSXISTRnIDpcf5qytjs1Xo+yYyJMvzLL59mhAyb3p/cD+Y3/s3WhAx+l0XOKpzXnblrv9d3q4c2tWmm/SyFqthaqd0= admin@vm"
        }
      }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.bareMetalMachineKeySets.beginCreateOrUpdateAndWait(
    resourceGroupName,
    clusterName,
    bareMetalMachineKeySetName,
    bareMetalMachineKeySetParameters
  );
  console.log(result);
}

async function main() {
  createOrUpdateBareMetalMachineKeySetOfCluster();
}

main().catch(console.error);
