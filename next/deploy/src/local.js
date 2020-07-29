const child_process = require('child_process')
const fs = require('fs')
const path = require('path')

/**
 * The path of the version.json file relative to the build output directory
 */
const versionJSONPath = 'version.json'

const buildOutputDirPath = path.resolve('public')

/**
 * Get the SHA1 of the HEAD.
 *
 * Requires Git to be installed and available in the path.
 *
 * @returns {Promise<string>} The SHA1 of the HEAD
 */
function getGitHeadSHA1() {
  return new Promise((resolve, reject) => {
    child_process.exec('git rev-parse HEAD', (error, stdout) => {
      if (error !== null) {
        reject(error)
      }
      resolve(stdout.trim())
    })
  })
}

/**
 * Write the version.json file into the build output directory
 *
 * @param {object} obj Object to serialize into JSON and write into the file
 */
async function writeVersionJSON(obj) {
  const outputPath = path.join(buildOutputDirPath, 'version.json')

  await fs.promises.writeFile(outputPath, JSON.stringify(obj))
}

async function getAllFilePathsRelativeToDirectory(dirPath) {
  const paths = []

  const dir = await fs.promises.opendir(dirPath)
  for await (const dirent of dir) {
    if (dirent.isFile()) {
      paths.push(dirent.name)
    } else if (dirent.isDirectory()) {
      const subPaths = await getAllFilePathsRelativeToDirectory(
        path.join(dirPath, dirent.name)
      )
      subPaths.forEach((subPath) => paths.push(path.join(dirent.name, subPath)))
    } else {
      throw new Error(
        `Encountered unhandled directory entry ${path.join(
          dirPath,
          dirent.name
        )}`
      )
    }
  }

  return paths
}

/**
 * List all files in the build output directory
 *
 * @returns {Promise<string[]>} Platform-specific paths to all files in the build output directory,
 * relative to the build output directory
 */
function listBuildOutputFilePaths() {
  return getAllFilePathsRelativeToDirectory(buildOutputDirPath)
}

/**
 * Open a build output file for reading
 *
 * @param {string} filePath Platform-specific path to the file to open for reading, relative to the build output directory
 * @returns {ReadableStream} Stream of file data
 */
function readBuildOutputFile(filePath) {
  return fs.createReadStream(path.join(buildOutputDirPath, filePath))
}

module.exports = {
  getGitHeadSHA1,
  listBuildOutputFilePaths,
  readBuildOutputFile,
  versionJSONPath,
  writeVersionJSON,
}
