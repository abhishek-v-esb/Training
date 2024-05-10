const factorial = require("./factorial.js");
var http = require("http");
var url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    var q = url.parse(req.url, true).query;

    res.write(`factorial:${factorial.factorial(q.n)}`);
    res.end();
  })
  .listen(8080);
