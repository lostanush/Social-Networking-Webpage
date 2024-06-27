const express = require("express");
const Router = express();
const { users } = require("../Controllers/auth");

Router.get("/users", users);

module.exports = Router;
