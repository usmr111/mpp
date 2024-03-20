const express = require("express");
const app = express();

app.get("/", (req, res) => {
  code = req.query.cl;
  mode = req.query.md;
  if (!code || !mode) {
    res.redirect("https://www.google.com/");
  } else {
    res.redirect("https://link.tngdigital.com.my/" + code);
  }
});

app.listen(3000);
