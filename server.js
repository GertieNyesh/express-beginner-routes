//Dependencies
var express = require ('express');
var app = express();
var blog = require ('./routes/blog/index');
var portfolio = require('./routes/portfolio/index');
var api = require('./routes/api/index')
//Default path
app.get('/', function (req, res) {
	res.send("The server is up and running");
});


//Routes

app.use('/blog',blog);
app.use('/portfolio',portfolio);
app.use('/api',api);

//Listen to port
app.listen(3001);
console.log("Server running on port 3001");