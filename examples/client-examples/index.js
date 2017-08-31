

var request = require('request');
var emo = 'angry';

let data = {
  text: emo,
}

request.post(
    'http://localhost:3000/slack',
    { json: data },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);

console.log('testing ' + emo)
