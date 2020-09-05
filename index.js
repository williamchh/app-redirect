const express = require("express");
const app = express();
const port = 5000;

const { dispatcherGet, dispatcherPost } = require("./route/dispatcher");

app.use("/", async (req, res) => {
  if (req.method === "GET") {
    res.send(await dispatcherGet(req.url, req.headers));
  } else if (req.method == "POST") {
    res.send(await dispatcherPost(req.url, req.headers, req.body));
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
