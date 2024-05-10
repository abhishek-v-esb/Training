const express = require("express");
const app = express();

// const other = require("./other.js");
// const greetMiddleware = require("./greet.js");
// const { json } = require("body-parser");
// var cors = require("cors");
var cookieParser = require("cookie-parser");
app.use(cookieParser());

// app.use(cors());

const port = 9001;

// app.get("/ping", (req, res) => {
//   res.send("pong");
// });

// class GreetingService {
//   constructor(greeting = "hello") {
//     this.greeting = greeting;
//   }
//   creategreeting(name) {
//     return `${this.greeting},${name}!`;
//   }
// }

// express()
//   .use(
//     "/api/service1",
//     greetMiddleware({
//       service: new GreetingService("hello"),
//     })
//   )
//   .use(
//     "/api/service2",
//     greetMiddleware({
//       service: new GreetingService("hi"),
//     })
//   )
//   .listen(9001);

// app.get("/", other.add);

// app.get("/", function (req, res) {
//   var info = {
//     string_value: "hello",
//     number_value: 2131,
//   };
//   res.status(200).json(info);
// });

// error handling

// app.get("/names/:name", function (req, res, next) {
//   if (req.params.name == "abhi") {
//     return res.send("valid name");
//   } else {
//     next(new Error("not valid name"));
//   }
// });

// app.use(function (err, req, res, next) {
//   console.log(err.stack);
//   return res.status(500).send("Internal Error Ocurred");
// });

// cookies

// app.get("/setcookie", function (req, res) {
//   res.cookie("username", "naam verma", { maxAge: 900000, httpOnly: true });
//   return res.send("cookie has been set");
// });
// app.get("/getcookie", function (req, res) {
//   var username = req.cookies["username"];
//   if (username) {
//     return res.send(username);
//   }
//   return res.send("no cookie found");
// });

// custom middleware

// app.use(function (req, res, next) {
//   req.user = "testuser";
//   next();
// });

// app.get("/", function (req, res) {
//   var user = req.user;
//   console.log(user);
//   return res.send(user);
// });

app.listen(port, function () {
  console.log("Server is listening on port " + port);
});
