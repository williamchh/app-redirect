const express = require("express");
var bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
const port = 5000;
var path = require("path");

const { dispatcherGet, dispatcherPost } = require("./route/dispatcher");
const { ignoreRouteUrl } = require("./route/ignoreRoute");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(express.static("public"));
// app.use(express.static('files');
// app.use('/htmls', express.static('public'))

app.use("/", async (req, res) => {
  if (ignoreRouteUrl(req.url)) {
    var path = "";
    path = req.url.includes(".") ? req.url : req.url + "/index.html";
    if (
      path.slice(path.length - 5, path.length) == ".json" ||
      path.slice(path.length - 4, path.length) == ".ttf"
    ) {
      path = "/app" + path;
    }
    res.sendFile(path, { root: "./public" });
  } else {
    if (req.method === "GET") {
      res.send(await dispatcherGet(req.url, req.headers));
    } else if (req.method == "POST") {
      res.send(await dispatcherPost(req.url, req.headers, req.body));
    }
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
