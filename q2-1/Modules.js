// Include fs module
const fs = require("fs");

const path = require("path");

function Promiseaccess(fileName) {
  return new Promise((resolve, reject) => {
    fs.access(path.join(__dirname, fileName), (err) => {
      if (err) reject(`Error  ${fileName}`);
      else resolve(`File in access`);
    });
  });
}


function readFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) reject(`Error reading ${fileName}`);
      else resolve(data);
    });
  });
}

module.exports = {
  Promiseaccess,
  readFile,
};
