var http = require('http')

var server = http.createServer((request, response) => {
  response.writeHead(200)
  response.end('Hello NodeJS!')
});

server.listen(8080, (err) => {
	if (err) {
		return console.log('something bad happened', err)
	}
	console.log('server is listening on 8080')
});