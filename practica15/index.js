const express = require("express");
const path = require("path");

const app = express();


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

let port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
