"user strict";
// import core module
const express = require("express");
const body_parser = require("body-parser");
const mongoose = require("mongoose");

// import dependencies module
const route = require('./routes'); 

module.exports = function () {
  let app = express(),
    start,
    create;

  create = (db) => {
    // add middleware
    app.use(body_parser.json());
    app.use(body_parser.urlencoded());

    // connect to database
    connectDatabse(db.database);
  };

  start = (port) => {
    // server run
    app.listen(port, () =>
      console.log(`Server is running. Please connect with localhost:${port}`)
    );
  };

  route.init(app);

  return { create: create, start: start };
};

function connectDatabse(db) {
  // connected with mongodb
  mongoose
    .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then((success) => console.log("Database connection is successfully."))
    .catch((resoan) => console.log(resoan));
}
