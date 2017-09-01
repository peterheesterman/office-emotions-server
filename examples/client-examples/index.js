

var request = require('request');


var emo = 'mandrew';



let data = {
  text: emo,
}

request.get(
    'http://localhost:3000/play/'+emo,

    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);


console.log('testing ' + emo)
