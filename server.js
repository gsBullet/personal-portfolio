// server.js or app.js

require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the "public" directory
const initialPath = path.join(__dirname, "public");
app.use(express.static(initialPath));

// Serve the index.html at the root route
app.get("/", (req, res) => {
  res.sendFile(path.join(initialPath, "index.html"));
});

app.post("/mail", (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
    logger: true,
    debug: true,
  });

  const mailOptions = {
    from: `${process.env.EMAIL}`,
    to: `${email}`,
    subject: "portfolio submission",
    text: `First Name: ${firstName}\nLast Name: ${lastName} \nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json("Failed to send email");
    } else {
      return res
        .status(200)
        .json(
          "Email sent successfully, I will replay to you within 2 working days"
        );
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
