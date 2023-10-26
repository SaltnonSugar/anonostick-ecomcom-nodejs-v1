"use strict";
const mongoose = require("mongoose");
const { countConnections } = require("../helper/checkConnect");
const {
  db: { host, name, port },
} = require("../config/config.mongodb");
const connectString = `mongodb://${host}:${port}/${name}`;
console.log(`Connect: ${connectString}`);
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
      .then((_) => console.log("Connect DB success", countConnections()))
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
