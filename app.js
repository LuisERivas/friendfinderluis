// DEPENDENCIES

var express = require("express");
var path = require("path");

// EXPRESS CONFIGURATION

var app = express();
// Set an initial port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ROUTER
//require("./app/routing/apiRoutes")(app)
//require("./app/routing/htmlRoutes")(app);

//listener
app.listen(PORT, function () {
  console.log(`App listening on PORT ${PORT}`);
});

