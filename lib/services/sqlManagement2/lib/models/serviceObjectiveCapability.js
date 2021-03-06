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
 * Initializes a new instance of the ServiceObjectiveCapability class.
 * @constructor
 * The service objectives capabilities.
 *
 * @member {string} [name] The service objective name.
 *
 * @member {string} [status] The status of the service objective. Possible
 * values include: 'Visible', 'Available', 'Default', 'Disabled'
 *
 * @member {string} [unit] Unit type used to measure service objective
 * performance level. Possible values include: 'DTU'
 *
 * @member {number} [value] Performance level value.
 *
 * @member {string} [id] The unique ID of the service objective.
 *
 * @member {array} [supportedMaxSizes] The list of supported maximum database
 * sizes for this service objective.
 *
 */
class ServiceObjectiveCapability {
  constructor() {
  }

  /**
   * Defines the metadata of ServiceObjectiveCapability
   *
   * @returns {object} metadata of ServiceObjectiveCapability
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceObjectiveCapability',
      type: {
        name: 'Composite',
        className: 'ServiceObjectiveCapability',
        modelProperties: {
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            readOnly: true,
            serializedName: 'status',
            type: {
              name: 'Enum',
              allowedValues: [ 'Visible', 'Available', 'Default', 'Disabled' ]
            }
          },
          unit: {
            required: false,
            readOnly: true,
            serializedName: 'performanceLevel.unit',
            type: {
              name: 'Enum',
              allowedValues: [ 'DTU' ]
            }
          },
          value: {
            required: false,
            readOnly: true,
            serializedName: 'performanceLevel.value',
            type: {
              name: 'Number'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          supportedMaxSizes: {
            required: false,
            readOnly: true,
            serializedName: 'supportedMaxSizes',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MaxSizeCapabilityElementType',
                  type: {
                    name: 'Composite',
                    className: 'MaxSizeCapability'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceObjectiveCapability;
