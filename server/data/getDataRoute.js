
module.exports = (function () {
  'use strict'
  var router = require('express').Router()
  let fs = require('fs')
  let path = require('path')
  var bodyParser = require('body-parser')
  let log = console.log.bind(console);

  router.get('/data', function (req, res) {

    let filePath = path.resolve('__dirname', `../uploads/db.json`)
    let text = fs.readFileSync(filePath, 'utf8')
    let db = JSON.parse(text)

    log(`Returning all data`)
    res.json(db);
  })

  return router
})()
