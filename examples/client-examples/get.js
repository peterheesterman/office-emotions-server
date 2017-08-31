

var request = require('request');

request.get(
    'http://localhost:3000/play',
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);

console.log('Ran get')