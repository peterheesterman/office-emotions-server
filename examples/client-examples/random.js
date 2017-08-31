var request = require('request');

request.get(
    'http://localhost:3000/playRandom',
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);

console.log('test')
