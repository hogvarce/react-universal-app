require('babel-register')({
    presets: ['es2015', 'react', 'stage-0']
});
var express = require("express");
var app = express();

app.use(express.static('public'));

app.use(require('./routes/index.jsx'));

var port = 3000;
app.listen(port, function(){
    console.log('server started on '+port+'!');
});