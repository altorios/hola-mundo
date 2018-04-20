const path = require('path');
const url = require('url');
const http = require('http');

const hostname = 'localhost';
const port = 8080;

const server = http.createServer();
server.on('request', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    var headers = Object.entries(req.headers);
    for (var element in headers) {
      res.write(headers[element] + "\n")
    }
    var q = url.parse(req.url, true).query;
    res.end('Hello World. The method of request was: ' + req.method
    + '\n' + Object.entries(req.headers)[1]);
 });

 server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(server.eventNames());
});
