const express = require("express");
const adminRouter = express.Router();

// /admin/add-product => GET
adminRouter.get("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Submit</button></form>"
  );
});

// /admin/add-product => POST
adminRouter.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = adminRouter;
