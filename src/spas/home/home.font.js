const BUNDLE_HELPER = require('../../utils')

module.exports = {
    files: [
      './icons/beer.svg'
    ],
    fileName: BUNDLE_HELPER.path(__dirname) + '\\fonts.[ext]' //replaced "/" to "\" to show the correct path in Windows
  }