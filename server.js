var http = require("http");
http.createServer(
    (request,response) => {
        response.writeHead(200,{"content-type":"text-plain"});
        response.end("Hello World");
    }
).listen(8082);
console.log("server running at 127.0.0.1:8082");
