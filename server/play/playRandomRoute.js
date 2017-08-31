
module.exports = (function () {
  'use strict'
  let router = require('express').Router()
  let Milight = require('../../src/index').MilightController
  let commands = require('../../src/index').commands2
  let fs = require('fs')
  let path = require('path')
  let Color = require('color')
  let tinycolor = require('tinycolor2');

  let light = new Milight({
          ip: "255.255.255.255",
          delayBetweenCommands: 80,
          commandRepeat: 2
      });

  let zone = 1
  const count = 10;
  const log = console.log.bind(console)

  const show = function (r, g, b, brightness, delay) {
    log(r, g, b, brightness, delay);
    light.sendCommands(
      commands.rgbw.on(zone),
      commands.rgbw.rgb(r, g, b),
      commands.rgbw.brightness(brightness)
    );
    
    light.pause(delay)
  }

  router.get('/playRandom', function (req, res) {
    log(`Playing Random!`)

    for (var i = 0; i < count; i++) {
      let randomColor = tinycolor.random();
      let {r,g,b} = randomColor.toRgb();
      let brightness = Math.floor(Math.random() * 100);  // between 0 and 100  
      let time = Math.floor(Math.random() * (500 - 200)) + 200; // between 100 and 500
      show(r,g,b,brightness,time);
    }
    
    light.sendCommands(commands.rgbw.off(zone))
    
    light.close().then(function () {
      console.log("All command have been executed - closing Milight")
    });

    res.json({played: true})
  });

  return router
})()