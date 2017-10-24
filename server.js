const express = require("express");
const app     = express();
const path    = require("path");

app.use("/", express.static("dist"));

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
