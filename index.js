const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  const file = fs.readFileSync("index.html", "utf8");
  console.log("Success");
  res.end(file);
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
