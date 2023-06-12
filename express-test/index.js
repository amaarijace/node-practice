const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.use((req, res, next) => {
  res.status(404).send("Not found lmao");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
