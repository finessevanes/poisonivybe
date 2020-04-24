const express = require("express");
const companies = require("./database/companies");
const server = express();

server.get("/api", (req, res) => {
  res.json(companies);
});

server.listen(3000, () => {
  console.log("server is on");
});
