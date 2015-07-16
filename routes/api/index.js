//Dependencies
var express = require('express');
var route = express.Router();

//routepath
route.get('/', function (req, res) {
	res.send("This is your api page");
});

//Export
module.exports = route;