const AWS = require('aws-sdk')
const mime = require('mime-types')
const path = require('path')

/**
 * Caching policy for objects in S3
 *
 * @enum {string}
 * @readonly
 */
const CachingPolicy = Object.freeze({
  /**
   * Allow caching but require validation before using the cached copy
   */
  CacheAndRequireValidation: 'cacheAndRequireValidation',
  /**
   * Allow caching with a very long lifetime
   */
  CacheForever: 'cacheForever',
})

const cacheControlLUT = Object.freeze({
  [CachingPolicy.CacheAndRequireValidation]: 'no-cache',
  [CachingPolicy.CacheForever]: 'public, max-age=31536000',
})

const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

/**
 * List objects stored in Amazon S3
 *
 * @param {string} bucketName Name of the bucket to list objects from
 * @returns {Promise<string[]>} Keys of objects in the bucket
 */
async function listObjects(bucketName) {
  let objects = []

  let continuationToken
  do {
    const response = await s3
      .listObjectsV2({
        Bucket: bucketName,
        ContinuationToken: continuationToken,
      })
      .promise()

    objects = [...objects, ...response.Contents.map((c) => c.Key)]
    continuationToken = response.NextContinuationToken
  } while (continuationToken)

  return objects
}

/**
 * Delete objects from Amazon S3
 *
 * @param {string} bucketName Name of the bucket to delete objects from
 * @param {string[]} keys Keys of objects to delete from the bucket
 * @returns {Promise<void>}
 */
async function deleteObjects(bucketName, keys) {
  // This is an AWS documented limit on the number of keys in a request
  // https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObjects.html
  const requestKeyLimit = 1000

  for (let i = 0; i < keys.length; i += requestKeyLimit) {
    const requestKeys = keys.slice(i, i + requestKeyLimit)

    await s3
      .deleteObjects({
        Bucket: bucketName,
        Delete: {
          Objects: requestKeys.map((key) => {
            return { Key: key }
          }),
          // We have no need for the response data anyways, so reduce the response size
          Quiet: true,
        },
      })
      .promise()
  }
}

/**
 * Upload an object to Amazon S3
 *
 * @param {string} bucketName Name of the bucket to upload object to
 * @param {string} objectKey Key of the uploaded object
 * @param {CachingPolicy} cachingPolicy Caching policy for the uploaded object when requested by web clients
 * @param {ReadableStream} stream Object data
 * @returns {Promise<void>}
 */
async function uploadObject(bucketName, objectKey, cachingPolicy, stream) {
  await s3
    .upload({
      Bucket: bucketName,
      Key: objectKey,
      Body: stream,
      ContentType: mime.lookup(path.posix.extname(objectKey)) || undefined,
      CacheControl: cacheControlLUT[cachingPolicy],
    })
    .promise()
}

module.exports = {
  CachingPolicy,
  deleteObjects,
  listObjects,
  uploadObject,
}
