

var request = require('request');
var emo = 'happy';



request.get(
    //'http://192.168.88.54:3000/play',
    //'http://192.168.88.54:3000/slack',
    'http://localhost:3000/play/' + emo,
    //'http://localhost:3000/slack',
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);


console.log('testing ' + emo)
