
module.exports = (function () {
  'use strict'
  let router = require('express').Router()

  let Milight = require('../../src/index').MilightController
  let commands = require('../../src/index').commands2
  let fs = require('fs')
  let path = require('path')
  let Color = require('color')

  let light = new Milight({
          ip: "255.255.255.255",
          delayBetweenCommands: 80,
          commandRepeat: 2
      });

  let zone = 1

  const log = console.log.bind(console)

  const show = function (r, g, b, brightness, delay) {
    light.sendCommands(
      commands.rgbw.on(zone),
      commands.rgbw.rgb(r, g, b),
      commands.rgbw.brightness(brightness)
    );
    
    light.pause(delay)
  }

  router.post('/play', function (req, res) {
    let {name} = req.body
    log(`Playing ${name}`)

    let text = fs.readFileSync(path.resolve('__dirname', `../uploads/db.json`), 'utf8')
    let db = JSON.parse(text)

    let realCommand = db.emotions.find(command => command.name === name);
    
    if (realCommand) {
      realCommand.steps.forEach(function(element) {
        if (element.color === '000000') {
          light.sendCommands(commands.rgbw.off(zone))
        } else {
          let c = Color(`#${element.color}`)
          const {brightness, time} = element
          log(c.red(), c.green(), c.blue(), brightness, time)
          show(c.red(), c.green(), c.blue(), brightness, time)
        }
      })

      if (realCommand.offAtEnd) {
        light.sendCommands(commands.rgbw.off(zone))
      }

      light.close().then(function () {
        console.log("All command have been executed - closing Milight")
      })
      res.json({played: true})
    } else {
      res.json({played: false})
    }
  })

  return router
})()



