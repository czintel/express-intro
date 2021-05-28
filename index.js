import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.send("hello");
});

app.listen(3000, function () {
  console.log("app listening on port 3000");
});
