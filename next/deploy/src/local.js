const fs = require('fs')
const path = require('path')

const buildOutputDirPath = path.resolve('public')

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
  listBuildOutputFilePaths,
  readBuildOutputFile,
}
