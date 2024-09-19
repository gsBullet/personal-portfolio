const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

let initialPath = path.join(__dirname, "public");

app.use(express.static(initialPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(initialPath, "index.html"));
});

app.listen(port, () => {
  console.log("Server is running on port 3000"); // Server is listening on port 3000
});
