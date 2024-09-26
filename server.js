require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const { handler } = require("./netlify/functions/sendMail");

// Middleware
app.use(cors());
app.use(bodyParser.json()); // You can remove express.json() as bodyParser does the job

// Serve React production build
app.use(express.static(path.join(__dirname, "public")));

// Email sending route using the Netlify function handler
app.post("/.netlify/functions/sendMail", async (req, res) => {
  await handler(req, res);
});

// Handle React routing, send `index.html` for unmatched routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
