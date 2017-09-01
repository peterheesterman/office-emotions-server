
var express = require('express')
var cors = require('cors')
var compression = require('compression')
//var bodyParser = require('body-parser')

var app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(compression())
//app.use(bodyParser.json())

app.use(require('./server/play/playRoute'))
app.use(require('./server/play/playRandomRoute'))
app.use(require('./server/add/addRoute'))
app.use(require('./server/delete/deleteRoute'))
app.use(require('./server/commands/getCommandsRoute'))
app.use(require('./server/data/getDataRoute'))




app.listen(3000, function () {
  console.log('Listening on port 3000...\n')
})
