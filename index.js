const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "content-type": "text/html" });
      var file = fs.readFileSync("index.html", "utf8");
      res.end(file);
      break;
    case "/about":
      res.writeHead(200, { "content-type": "text/html" });
      var file = fs.readFileSync("about.html", "utf8");
      res.end(file);
      break;
    case "/contact-me":
      res.writeHead(200, { "content-type": "text/html" });
      var file = fs.readFileSync("contact-me.html", "utf8");
      res.end(file);
      break;
    default:
      res.writeHead(200, { "content-type": "text/html" });
      var file = fs.readFileSync("404.html", "utf8");
      res.end(file);
  }
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
