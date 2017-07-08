const fs = require('fs')
const request = require('request')

function saveWebPage(url, filePath) {
  return getWebPage(url, filePath)
    .then(writeFile)
}

function getWebPage(url) {
  return new Promise ((resolve, reject) => {
    request.get(url, (err, response, body) => {
      if (err) return reject(err)
      resolve(body)
    })
  })
}

function writeFile(fileContent) {
  let filePath = 'page'
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, fileContent, err => {
      if (err) return reject(err)
      resolve(filePath)
    })
  })
}

module.exports = {
  saveWebPage
}