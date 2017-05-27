var http = require("http");
var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<h1>Hello World! My name is Dwayne Norman</h1>");
	response.end();
});
server.listen(8001);