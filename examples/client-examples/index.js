

var request = require('request');

let data = {
  name: 'timetest',
}

request.post(
    'http://192.168.88.54:3000/play',
    //'http://localhost:3000/play',
    { json: data },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);

console.log('test')
