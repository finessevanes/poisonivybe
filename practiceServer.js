const express = require("express");
const axios = require("axios");
const server = express();

app.get("/", (req, res) => {
  axios.get("https://randomuser.me/api/?page=1&results=10").then((response) => {
    res.send(response.data);
  });
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
