const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hello from my Node server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
