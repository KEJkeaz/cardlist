
var express = require('express')
var app = express()
app.listen(3000)
app.use('/', express.static(__dirname + '/frontend'))
console.log('start  http://localhost:3000')
