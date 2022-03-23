// file utils

import fs from 'fs';

/**
 * validate that a file path exists
 * @param {String} path
 * @returns {boolean}
 */
function isExistingFilePath (path) {
  try {
    const fStats = fs.statSync(path);
    return fStats.isFile();
  } catch (err) {
    return false;
  }
}

/**
 * read content of file as text
 * @param {string} path
 * @return {string}
 */
function readFileText(path) {
  if (!path) { return ""; }
  return fs.readFileSync(path, {encoding: 'utf8'});
}

export {
  isExistingFilePath,
  readFileText
};
