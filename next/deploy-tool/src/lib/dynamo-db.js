const AWS = require('aws-sdk')

const { awsRegion } = require('./config.js')

const lockIdAttribute = 'id'

const DynamoDBConditionalCheckFailedCode = 'ConditionalCheckFailedException'

const client = new AWS.DynamoDB.DocumentClient({
  apiVersion: '2012-08-10',
  region: awsRegion,
})

/*
 * Items in the table have the following schema
 *
 * {
 *   id: string,
 *   instanceId: string,
 *   info: object,
 * }
 *
 * - The table primary key is 'id'. All locks for the same resource shall use the same 'id'.
 * - When a lock is held, there is exactly one item with the 'id' present in the table
 * - Every held lock has an 'instanceId' which is used to prevent unintentional unlocking by a client
 *   that did not originally acquire the lock
 * - The 'info' is human-readable metadata to help identify what acquired a lock
 */

/**
 * Put a lock record in DynamoDB
 *
 * @param {string} tableName Name of the table to record the lock in
 * @param {string} id Lock ID. The Lock ID represents a lockable resource.
 * @param {string} instanceId ID unique to this lock acquisition. The same ID must be used to release the lock if it is acquired.
 * @param {object} info Diagnostic metadata to store with the lock record
 * @returns {Promise<boolean>} True if the lock was acquired, false if the lock is already held
 */
async function putLock(tableName, id, instanceId, info) {
  try {
    await client
      .put({
        TableName: tableName,
        Item: { id, instanceId, info },
        ConditionExpression: `attribute_not_exists(${lockIdAttribute})`,
      })
      .promise()

    return true
  } catch (error) {
    if (error.code === DynamoDBConditionalCheckFailedCode) {
      return false
    }

    throw error
  }
}

/**
 * Delete a lock record from DynamoDB
 *
 * @param {string} tableName Name of the table to remove the lock record from
 * @param {string} id Lock ID. The Lock ID represents a lockable resource.
 * @param {string} instanceId Unique ID used when acquiring the lock
 * @returns {Promise<boolean>} True if the lock was released, false otherwise
 */
async function deleteLock(tableName, id, instanceId) {
  try {
    await client
      .delete({
        TableName: tableName,
        Key: { id },
        ConditionExpression: `attribute_exists(${lockIdAttribute}) AND instanceId = :instanceId`,
        ExpressionAttributeValues: {
          ':instanceId': instanceId,
        },
      })
      .promise()

    return true
  } catch (error) {
    if (error.code === DynamoDBConditionalCheckFailedCode) {
      return false
    }

    throw error
  }
}

/**
 * Get a lock record from DynamoDB
 *
 * @param {string} tableName Name of the table to remove the lock record from
 * @param {string} id Lock ID. The Lock ID represents a lockable resource.
 * @returns {Promise<object | null>} The lock record or null if the lock is not currently held
 */
async function getLock(tableName, id) {
  const data = await client
    .get({
      TableName: tableName,
      Key: { id },
      ConsistentRead: true,
    })
    .promise()

  return data.Item || null
}

module.exports = {
  deleteLock,
  getLock,
  putLock,
}
