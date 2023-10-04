"use strict";
const mongoose = require("mongoose");

const connectString = `mongodb://localhost:27017/shopDev`;

class Database {
  constructor() {
    this.connect();
  }
  connect() {
    if (1 == 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectString)
      .then((_) => console.log("Connect DB success"))
      .catch((err) => console.log("Error Connect!"));
  }
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongoodb = Database.getInstance();
module.exports = instanceMongoodb;
