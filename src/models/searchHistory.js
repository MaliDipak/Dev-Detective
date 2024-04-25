const fs = require("fs");

function saveUsername(username) {
  fs.appendFile("file.txt", `\n${username}`, (err) => {
    if (err) throw err;
    console.log("Data appended to file");
  });
}

function readFile() {
  let data = fs.readFileSync("file.txt", "utf8");
  data = data.split("\n");
  data = data.filter((username) => username != "");
  return [...new Set(data)];
}

module.exports = {
  saveUsername,
  readFile,
};
