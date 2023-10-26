const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
const { checkOverload } = require("./helper/checkConnect");
require("dotenv").config();

// console.log(`process::`, process.env);
// init middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db
require("./dbs/init.mongoodb");
// checkOverload();

// init routes
app.use("/", require("./routes"));
// export app
module.exports = app;
