var http = require('http');

function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello world");
    response.end();
};

// http.createServer
var server = http.createServer(onRequest);

server.listen(3000);
console.log(server);
