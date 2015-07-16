//Dependencies
var express = require('express');
var route = express.Router();

//routepath
route.get('/', function (req, res){
	res.send("this is your portfolio");
});

//export
module.exports = route;