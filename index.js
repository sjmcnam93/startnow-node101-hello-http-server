
var http = require("http");

console.log("Listening at http://localhost:8080/")

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World');
    res.end();
  }).listen(8080);
