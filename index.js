/**
 * Check whether or not 'str' is a datauri
 */

function isDatauri (str) {
  return str.indexOf('data:') === 0
}

/**
 * Exports
 */

module.exports = isDatauri
