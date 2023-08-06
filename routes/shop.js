const express = require("express");

const shopRouter = express.Router();

shopRouter.use("/", (req, res, next) => {
  res.send("<h1>Hello from shop</h1>");
});

module.exports = shopRouter;
