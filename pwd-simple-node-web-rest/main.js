var express = require("express");
var path = require("path");
var app = express();

app.get("/api/rest/time/now", (req, res, next) => {
	var date = new Date();
	var current_hour = date.getHours();
	strTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	res.json({time: strTime });
});

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/', express.static(path.join(__dirname, 'webapp')))

app.listen(8080, () => {
	console.log("Server running on port 8080");
});