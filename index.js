var express = require('express');

var app = express();

var port=process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/teste', function (req, res) {
   res.send('Hello World Teste');
})

app.listen(port);

console.log('Server Listening at port '+port);