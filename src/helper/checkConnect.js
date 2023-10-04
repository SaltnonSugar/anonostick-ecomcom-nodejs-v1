"use strict";

const { mongose } = require("mongoose");

const countConnections = () => {
  const connections = mongose.connections.length;
};
