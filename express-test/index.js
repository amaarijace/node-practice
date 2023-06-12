const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.use((req, res, next) => {
  const fileName = "404.html";

  res.status(404).sendFile();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
