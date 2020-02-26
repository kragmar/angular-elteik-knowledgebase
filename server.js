const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

// creates express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

// Connect to the database before starting the application server.
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
                .then(() => {
                  console.log("Succesfully connected to the database");
                  // Serve only the static files form the dist directory
                  app.use(express.static(__dirname + '/dist/angular-elteik-knowledgebase'));

                  app.get('/*', function(req,res) {
                    res.sendFile(path.join(__dirname + '/dist/angular-elteik-knowledgebase/index.html'));
                  });

                  // Initialize the app.
                  const server = app.listen(process.env.PORT || 8080, function () {
                    const port = server.address().port;
                    console.log("App now running on port", port);
                  });
                }).catch(err => {
                  console.log("Could not connect to database. Exiting now...", err);
                  process.exit();
                });

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}