
module.exports = (function () {
  'use strict'
  var router = require('express').Router()

  var fs = require('fs')
  var path = require('path')

  const log = console.log.bind(console)

  router.post('/delete', function (req, res) {
    let {name} = req.body

    var filePath = path.resolve('__dirname', `../uploads/db.json`)

    var text = fs.readFileSync(filePath, 'utf8')
    var db = JSON.parse(text)

    var index = db.emotions.findIndex(command => command.name === name);
    if (index >= 0) {
      log(`Deleted ${name}.`)
      db.emotions.splice(index, 1);
      fs.writeFileSync(filePath, JSON.stringify(db))
      res.json({deleted: true})
    } else {
    log(`Tried to delete ${name} but it was not a listed command.`)
      res.json({deleted: false})
    }
  })

  return router
})()



