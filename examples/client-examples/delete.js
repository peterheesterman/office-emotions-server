

var request = require('request');

let data = {
  name: 'testEmotion'
}

request.post(
    'http://localhost:3000/delete',
    { json: data },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);

console.log('Ran delete.js')