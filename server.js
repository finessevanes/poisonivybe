const express = require("express");
const server = express();

server.get("/", (res, req) => {
  const packageJson = require("./package.json");
  res.json(packageJson);
});

server.listen(3000, () => {
  console.log("server is on");
});
