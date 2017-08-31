
module.exports = (function () {
  'use strict'
  var router = require('express').Router()
  let fs = require('fs')
  let path = require('path')
  let log = console.log.bind(console);

  router.get('/commands', function (req, res) {

    let filePath = path.resolve('__dirname', `../uploads/db.json`)
    
    let text = fs.readFileSync(filePath, 'utf8')
    let db = JSON.parse(text)

    let commandNames = db.emotions.map(emo => emo.name);

    log(`Reported commands ${JSON.stringify(commandNames)}`)
    res.json({'commands': commandNames})
  })

  return router
})()
