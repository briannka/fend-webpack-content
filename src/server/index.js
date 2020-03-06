var path = require("path");
const express = require("express");
const webpack = require("webpack");
const aylien = require("aylien_textapi");
const bodyParser = require("body-parser");
​
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require("../../webpack.dev");
​
const mockAPIResponse = require("./mockAPI.js");
​
const app = express();
​
app.use(bodyParser.urlencoded());
​
app.use(bodyParser.json());
​
const devServerEnabled = true;
​
const textapi = new aylien({
  application_id: "f90d8dce",
  application_key: "b2bd76908675a43e3e936afaf7f57cf9"
});
​
if (devServerEnabled) {
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
​
  const compiler = webpack(config);
​
  //Enable "webpack-dev-middleware"
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath
    })
  );
​
  //Enable "webpack-hot-middleware"
  app.use(webpackHotMiddleware(compiler));
}
​
app.use(express.static("../../dist"));
​
app.post("/api/test", function(req, res) {
  textapi.sentiment(
    {
      text: req.body.text,
      mode: "tweet"
    },
    function(error, response) {
      if (error === null) {
        res.status(200).send(response);
      }
    }
  );
});
// designates what port the app will listen to for incoming requests
app.listen(8080, function() {
  console.log("Example app listening on port 8080!");
});