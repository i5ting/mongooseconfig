require('.')()

var express  = require('express');
var app      = express();

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/2', function (req, res) {
  res.send('Hello World2')
})



// 随机端口3000 - 10000 之间
app.listen(4001)