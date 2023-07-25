/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const OperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      isDataAction: {
        serializedName: "isDataAction",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      origin: {
        serializedName: "origin",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      actionType: {
        serializedName: "actionType",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail"
        }
      }
    }
  }
};

export const ErrorDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
        }
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo"
            }
          }
        }
      }
    }
  }
};

export const ErrorAdditionalInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SkuInformationList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SkuInformationList",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SkuInformation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SkuInformation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SkuInformation",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        type: {
          name: "String"
        }
      },
      resourceType: {
        serializedName: "resourceType",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      locations: {
        serializedName: "locations",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      locationInfo: {
        serializedName: "locationInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SkuLocationInfo"
            }
          }
        }
      },
      capabilities: {
        serializedName: "capabilities",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SKUCapability"
            }
          }
        }
      }
    }
  }
};

export const SkuLocationInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SkuLocationInfo",
    modelProperties: {
      location: {
        serializedName: "location",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      zones: {
        serializedName: "zones",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const SKUCapability: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SKUCapability",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ElasticSanList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ElasticSanList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ElasticSan"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Sku: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpoint: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpoint",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkServiceConnectionState: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkServiceConnectionState",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      actionsRequired: {
        serializedName: "actionsRequired",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      }
    }
  }
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String"
        }
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const ElasticSanUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ElasticSanUpdate",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      baseSizeTiB: {
        serializedName: "properties.baseSizeTiB",
        type: {
          name: "Number"
        }
      },
      extendedCapacitySizeTiB: {
        serializedName: "properties.extendedCapacitySizeTiB",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const VolumeGroupList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VolumeGroupList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VolumeGroup"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NetworkRuleSet: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NetworkRuleSet",
    modelProperties: {
      virtualNetworkRules: {
        serializedName: "virtualNetworkRules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualNetworkRule"
            }
          }
        }
      }
    }
  }
};

export const VirtualNetworkRule: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualNetworkRule",
    modelProperties: {
      virtualNetworkResourceId: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      action: {
        defaultValue: "Allow",
        isConstant: true,
        serializedName: "action",
        type: {
          name: "String"
        }
      },
      state: {
        serializedName: "state",
        readOnly: true,
        type: {
          name: "Enum",
          allowedValues: [
            "provisioning",
            "deprovisioning",
            "succeeded",
            "failed",
            "networkSourceDeleted"
          ]
        }
      }
    }
  }
};

export const VolumeGroupUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VolumeGroupUpdate",
    modelProperties: {
      protocolType: {
        serializedName: "properties.protocolType",
        type: {
          name: "String"
        }
      },
      encryption: {
        serializedName: "properties.encryption",
        type: {
          name: "String"
        }
      },
      networkAcls: {
        serializedName: "properties.networkAcls",
        type: {
          name: "Composite",
          className: "NetworkRuleSet"
        }
      }
    }
  }
};

export const SourceCreationData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SourceCreationData",
    modelProperties: {
      createSource: {
        defaultValue: "None",
        isConstant: true,
        serializedName: "createSource",
        type: {
          name: "String"
        }
      },
      sourceUri: {
        serializedName: "sourceUri",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IscsiTargetInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IscsiTargetInfo",
    modelProperties: {
      targetIqn: {
        serializedName: "targetIqn",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      targetPortalHostname: {
        serializedName: "targetPortalHostname",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      targetPortalPort: {
        serializedName: "targetPortalPort",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      provisioningState: {
        serializedName: "provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VolumeUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VolumeUpdate",
    modelProperties: {
      sizeGiB: {
        serializedName: "properties.sizeGiB",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const VolumeList: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VolumeList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Volume"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpointConnectionListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnection"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkResourceListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResourceListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateLinkResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpointConnection: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnection",
    modelProperties: {
      ...Resource.type.modelProperties,
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      privateEndpoint: {
        serializedName: "properties.privateEndpoint",
        type: {
          name: "Composite",
          className: "PrivateEndpoint"
        }
      },
      privateLinkServiceConnectionState: {
        serializedName: "properties.privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "PrivateLinkServiceConnectionState"
        }
      },
      groupIds: {
        serializedName: "properties.groupIds",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const TrackedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProxyResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties
    }
  }
};

export const PrivateLinkResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      groupId: {
        serializedName: "properties.groupId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      requiredMembers: {
        serializedName: "properties.requiredMembers",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      requiredZoneNames: {
        serializedName: "properties.requiredZoneNames",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ElasticSan: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ElasticSan",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      sku: {
        serializedName: "properties.sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      availabilityZones: {
        serializedName: "properties.availabilityZones",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      baseSizeTiB: {
        serializedName: "properties.baseSizeTiB",
        required: true,
        type: {
          name: "Number"
        }
      },
      extendedCapacitySizeTiB: {
        serializedName: "properties.extendedCapacitySizeTiB",
        required: true,
        type: {
          name: "Number"
        }
      },
      totalVolumeSizeGiB: {
        serializedName: "properties.totalVolumeSizeGiB",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      volumeGroupCount: {
        serializedName: "properties.volumeGroupCount",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      totalIops: {
        serializedName: "properties.totalIops",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      totalMBps: {
        serializedName: "properties.totalMBps",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      totalSizeTiB: {
        serializedName: "properties.totalSizeTiB",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      privateEndpointConnections: {
        serializedName: "properties.privateEndpointConnections",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnection"
            }
          }
        }
      }
    }
  }
};

export const VolumeGroup: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VolumeGroup",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      protocolType: {
        serializedName: "properties.protocolType",
        type: {
          name: "String"
        }
      },
      encryption: {
        serializedName: "properties.encryption",
        type: {
          name: "String"
        }
      },
      networkAcls: {
        serializedName: "properties.networkAcls",
        type: {
          name: "Composite",
          className: "NetworkRuleSet"
        }
      },
      privateEndpointConnections: {
        serializedName: "properties.privateEndpointConnections",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnection"
            }
          }
        }
      }
    }
  }
};

export const Volume: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Volume",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      volumeId: {
        serializedName: "properties.volumeId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      creationData: {
        serializedName: "properties.creationData",
        type: {
          name: "Composite",
          className: "SourceCreationData"
        }
      },
      sizeGiB: {
        serializedName: "properties.sizeGiB",
        required: true,
        type: {
          name: "Number"
        }
      },
      storageTarget: {
        serializedName: "properties.storageTarget",
        type: {
          name: "Composite",
          className: "IscsiTargetInfo"
        }
      }
    }
  }
};

export const ElasticSansUpdateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ElasticSansUpdateHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ElasticSansDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ElasticSansDeleteHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VolumeGroupsUpdateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VolumeGroupsUpdateHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VolumeGroupsDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VolumeGroupsDeleteHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VolumesUpdateHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VolumesUpdateHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VolumesDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VolumesDeleteHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpointConnectionsDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnectionsDeleteHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};
