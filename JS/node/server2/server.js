var url = require("url");
var http = require("http");
var fs = require("fs");
const readlineSync = require("readline-sync");
const { Console } = require("console");

var data = [];
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    var q = url.parse(req.url, true);

    // console.log(q.pathname);
    switch (q.pathname) {
      case "/postData":
        req.on("data", function (datachunk) {
          var input = JSON.parse(datachunk);

          //   console.log(input.user);
          var studentData = {};
          // const userData = input.user;
          // console.log(userData);

          if (!Object.keys(studentData).length) {
            Object.assign(studentData, { userId: "3" });
            Object.assign(studentData, { name: input.user.name });
            Object.assign(studentData, { email: input.user.email });
            Object.assign(studentData, { education: input.user.education });

            data.push(JSON.stringify(studentData));
          }

          fs.appendFile(
            `${input.fileName}` + "." + `${input.fileType}`,
            JSON.stringify(studentData) + "\n",

            "utf8",
            function (err) {
              if (err) throw err;
              res.end("Data saved");
            }
          );
          // console.log(data.toString());
        });

        break;

      case "/getData":
        req.on("data", function (datachunk) {
          var input = JSON.parse(datachunk);
          const fileName = input.fileName;
          const fileType = input.fileType;
          const id = input.id;
          let linesArr = [];
          const filePath = `/home/abhishek-verma/Desktop/training/node/server2/${fileName}..${fileType}`;
          // console.log(filePath);
          const fileContent = fs.readFileSync(filePath, "utf-8");
          const lines = fileContent.split("\n");

          for (const line of lines) {
            linesArr.push(line);
          }
          linesArr.forEach((element) => {
            // console.log();
            if (JSON.parse(element).userId === id) {
              res.write(element);
            }
          });

          res.end();
        });

        break;

      case "/deleteData":
        const fileName = q.query.fileName;
        const fileType = q.query.fileType;
        const id = q.query.id;
        const uId = `"userId":"${id}"`;
        // console.log(uId);

        let linesArr = [];
        const filePath = `/home/abhishek-verma/Desktop/training/node/server2/${fileName}..${fileType}`;
        // console.log(filePath);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const lines = fileContent.split("\n");

        for (const line of lines) {
          linesArr.push(line);
        }

        linesArr.forEach((element) => {
          // console.log();
        });
        // linesArr.forEach((element) => {
        //   console.log(JSON.parse(element));
        // });
        res.end();
        break;
    }
  })
  .listen(8500);
