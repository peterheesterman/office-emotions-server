
var express = require('express')
var cors = require('cors')
var compression = require('compression')
//var bodyParser = require('body-parser')

var app = express()
app.use(compression())
//app.use(bodyParser.json())

app.use(require('./server/play/playRoute'))
app.use(require('./server/play/playRandomRoute'))
app.use(require('./server/add/addRoute'))
app.use(require('./server/delete/deleteRoute'))
app.use(require('./server/commands/getCommandsRoute'))




app.listen(3000, function () {
  console.log('Listening on port 3000...\n')
})
