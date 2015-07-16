//Dependencies
var express = require ('express');
var route = express.Router();

//routepath
route.get('/', function (req, res) {
	res.send("this is your blog page");
});

//Export
module.exports = route;