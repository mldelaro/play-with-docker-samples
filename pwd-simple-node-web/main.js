var http = require('http')

var server = http.createServer((request, response) -> {
  response.writeHead(200)
  response.end('Hello NodeJS!')
});