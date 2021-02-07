var http = require("http");

var serverInfo = function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello Matthew\n');
}
http.createServer(serverInfo).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');

