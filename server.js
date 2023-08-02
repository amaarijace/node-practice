const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text'><button>Send</button></form></body>"
    );
    res.write("</html>");
    res.end();
  }
});

server.listen(3000);
