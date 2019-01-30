var produceProvider = require('connection-produce-dao-provider');
var express = require('express');
var path = require('path');
var app = express();

app.use(express.json());
app.use(express.urlencoded());

// RESTFUL API
// TIME API
app.get('/api/rest/time/now', (req, res, next) => {
	var date = new Date();
	var current_hour = date.getHours();
	strTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
	res.json({time: strTime });
});

// RESTAURANT API

/* Get all products */
app.get('/api/rest/products', (req, res, next) => {
	console.log('received request for all produce');
	produceProvider.selectAllProducts((results) => {
		console.log('on callback' + results);
		res.json(results);
	});
});

/* Get a specific product */
app.get('/api/rest/products/:id', (req, res, next) => {
	let id = req.params.id;
	console.log('received request for product_id [' + id + ']');
	produceProvider.selectProductForId(id, (results) => {
		console.log('on callback' + results);
		res.json(results[0]);
	});
});

/* Create a new products */
app.post('/api/rest/products', (req, res, next) => {
	let name = req.body.name;
	let description = req.body.description;
	console.log('received request for creating a new product [' + name + ']');
	produceProvider.createProduct(name, description, (results) => {
		console.log('on callback' + results);
		res.json(results);
	});
});

/* Delete an existing product */
app.delete('/api/rest/products/:id', (req, res, next) => {
	let name = req.body.name;
	let description = req.body.description;
	console.log('received request for creating a new product [' + name + ']');
	produceProvider.createProduct(name, description, (results) => {
		console.log('on callback' + results);
		res.json(results);
	});
});

// WEBAPP
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/webapp/index.html'));
});

app.use('/', express.static(path.join(__dirname, 'webapp')))

app.listen(8080, () => {
	console.log('Server running on port 8080');
});