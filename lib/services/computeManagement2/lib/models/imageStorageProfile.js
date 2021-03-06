/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the ImageStorageProfile class.
 * @constructor
 * Describes a storage profile.
 *
 * @member {object} osDisk The OS disk.
 *
 * @member {string} [osDisk.osType] The Operating System type. Possible values
 * include: 'Windows', 'Linux'
 *
 * @member {string} [osDisk.osState] The OS State. Possible values include:
 * 'Generalized', 'Specialized'
 *
 * @member {object} [osDisk.snapshot] The snapshot.
 *
 * @member {string} [osDisk.snapshot.id] Resource Id
 *
 * @member {object} [osDisk.managedDisk] The managedDisk.
 *
 * @member {string} [osDisk.managedDisk.id] Resource Id
 *
 * @member {string} [osDisk.blobUri] The Virtual Hard Disk.
 *
 * @member {string} [osDisk.caching] The caching type. Possible values include:
 * 'None', 'ReadOnly', 'ReadWrite'
 *
 * @member {number} [osDisk.diskSizeGB] The initial managed disk size in GB for
 * blank data disks, and the new desired size for existing OS and Data disks.
 *
 * @member {string} [osDisk.storageAccountType] The Storage Account type.
 * Possible values include: 'Standard_LRS', 'Premium_LRS'
 *
 * @member {array} [dataDisks] The data disks.
 *
 */
class ImageStorageProfile {
  constructor() {
  }

  /**
   * Defines the metadata of ImageStorageProfile
   *
   * @returns {object} metadata of ImageStorageProfile
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ImageStorageProfile',
      type: {
        name: 'Composite',
        className: 'ImageStorageProfile',
        modelProperties: {
          osDisk: {
            required: true,
            serializedName: 'osDisk',
            type: {
              name: 'Composite',
              className: 'ImageOSDisk'
            }
          },
          dataDisks: {
            required: false,
            serializedName: 'dataDisks',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ImageDataDiskElementType',
                  type: {
                    name: 'Composite',
                    className: 'ImageDataDisk'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ImageStorageProfile;
