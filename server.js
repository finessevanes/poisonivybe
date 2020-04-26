const express = require("express");
const cors = require("cors");
const server = express();
const fs = require("fs");
const fileName = "./database/dataTonic.json";

server.use(cors());

const readFileAsync = () => {
  fs.readFile(fileName, (error, data) => {
    if (error) {
    } else {
      try {
        const dataJson = JSON.parse(data);
        server.get("/", (req, res) => {
          res.json(dataJson);
        });
      } catch (error) {
        console.log(error);
      }
    }
  });
};

readFileAsync();

// set port, listen for requests
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// test
