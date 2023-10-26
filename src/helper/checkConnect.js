"use strict";

const mongose = require("mongoose");
const os = require("os");
const process = require("process");
const _SECONDS = 5000;
// check number of connections
const countConnections = () => {
  const connections = mongose.connections.length;
  console.log(`Number of connections:${connections}`);
};

// check overloading
const checkOverload = () => {
  setInterval(() => {
    const numConnections = mongose.connections.length;
    const numCore = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    // example max number of connections
    const maxConnections = numCore * 5;
    console.log(`Memory usage: ${memoryUsage / 1024 / 1024} MB`);
    if (numConnections > maxConnections) {
      console.log(`Connection overload detected: ${maxConnections}`);
    }
  }, _SECONDS); // monitor every 5 second
};
module.exports = {
  countConnections,
  checkOverload,
};
