const factorial = require("./factorial.js");
const vowels = require("./vowels.js");
const oddeven = require("./oddeven");
const countvowel = require("./vowelcount");
const palindrome = require("./palindrome.js");
const vowelcntmax = require("./vowelcountmax");
const calculator = require("./calculator.js");

var url = require("url");
var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var q = url.parse(req.url, true);
    if (q.pathname == "/vowels") {
      res.write(vowels.operation(q.query.str));
      res.end();
    } else if (q.pathname === "/oddeven") {
      res.write(oddeven.oddeven(q.query.n));
      res.end();
    } else if (q.pathname === "/factorial") {
      res.write(`factorial:${factorial.factorial(q.query.n)}`);
      res.end();
    } else if (q.pathname === "/vowelCount") {
      res.write(countvowel.countvowel(q.query.str));
      res.end();
    } else if (q.pathname == "/palindrome") {
      res.write(palindrome.checkpalindrome(q.query.str));
      res.end();
    } else if (q.pathname == "/vowelcountmax") {
      res.write(vowelcntmax.vowelcntmax(q.query.str));
      res.end();
    } else if (q.pathname == "/calculator") {
      res.write(calculator.operation(q.query.str));
      res.end();
    }
  })
  .listen(3000);
