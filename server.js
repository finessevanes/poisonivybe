const express = require("express");
const server = express();
const fs = require("fs");
const fileName = "./database/dataTonicData.json";

const readFileAsync = () => {
  fs.readFile(fileName, (error, data) => {
    console.log("Async Starting");
    if (error) {
      console.log("Async error", error);
    } else {
      try {
        const dataJson = JSON.parse(data);
        console.log("AsyncREAD");
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
