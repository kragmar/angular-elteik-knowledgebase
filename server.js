const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// creates express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
//var db;

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
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

/* // Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://drumkiller:QayWsxEdc123@ds149706.mlab.com:49706/heroku_bml37ltr", function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");

  // Serve only the static files form the dist directory
  app.use(express.static(__dirname + '/dist/angular-elteik-knowledgebase'));

  app.get('/*', function(req,res) {  
    res.sendFile(path.join(__dirname + '/dist/angular-elteik-knowledgebase/index.html'));
  });

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}
 */