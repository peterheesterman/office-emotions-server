
module.exports = (function () {
  'use strict'

  let router = require('express').Router()
  let fs = require('fs')
  let path = require('path')
  const log = console.log.bind(console)

  router.post('/add', function (req, res) {
    let {name, steps} = req.body

    let filePath = path.resolve('__dirname', `../server/uploads/db.json`)

    let text = fs.readFileSync(filePath, 'utf8')
    let db = JSON.parse(text)

    let realCommand = db.emotions.find(command => command.name === name);
    if (realCommand) {
      log(`Failed to add ${name}`)
      res.json({written: false})
    } else {
    log(`Added ${name}`)
      db.emotions.push({
        name,
        steps
      });

      fs.writeFileSync(filePath,JSON.stringify(db))

      res.json({written: true})
    }
  })

  return router
})()



