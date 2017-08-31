

var request = require('request');

let data = {
  name: 'happy',
}

request.post(
    'http://localhost:3000/play',
    { json: data },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);

console.log('test')