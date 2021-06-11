"user strict";
// import core module
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// import dependencies module
const route = require("./routes");

module.exports = function () {
  let app = express(),
    start,
    create;

  create = (db) => {
    // parse application/json
    app.use(bodyParser.json());


    // add middleware
    app.use(bodyParser.urlencoded({ extended: false }));
    

    // connect to database
    connectDatabse(db.database);
    
    route.init(app);
  };

  start = (port) => {
    // server run
    app.listen(port, () =>
      console.log(`Server is running. Please connect with localhost:${port}`)
    );
  };

 

  return { create: create, start: start };
};

function connectDatabse(db) {
  // connected with mongodb
  mongoose
    .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then((success) => console.log("Database connection is successfully."))
    .catch((resoan) => console.log(resoan));
}
