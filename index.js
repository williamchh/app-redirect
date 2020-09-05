const express = require("express");
const app = express();

const port = 5000;

app.use("/", (req, res) => {
  res.send(req.url + "\n" + req.headers);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
