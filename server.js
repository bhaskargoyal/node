var http = require('http');

http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("this is my first node js http server");
	response.end();
}).listen(8000);

console.log("Server is running at http://127.0.0.1:8000");