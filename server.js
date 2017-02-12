require('babel-register')({
    presets: ['es2015', 'react', 'stage-0']
});
var express = require("express");
var app = express();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Component = require('./Component.jsx').default;

app.use(express.static('public'));

app.get('/', function(req, res){
    var html = ReactDOMServer.renderToString(React.createElement(Component));
    res.send(html);
});

var port = 3000;
app.listen(port, function(){
    console.log('server started on '+port+'!');
});