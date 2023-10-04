const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db
require("./dbs/init.mongoodb");
// init routes
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "OK",
  });
});
// export app
module.exports = app;
