
var request = require('request');

let data = {
  name: 'wr',
  steps: [
    {
      color: '777777',
      brightness: 100,
      time: 100,
      offAtEnd: true
    }
  ]
}

request.post(
    'http://localhost:3000/add',
    { json: data },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);

console.log('Added command')