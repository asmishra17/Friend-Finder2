// configure our dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

// setting up the express app
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

// setting up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

htmlRoutes(app);
apiRoutes(app);

// starting the server 
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});