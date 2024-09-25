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

// Serve React production build
app.use(express.static(path.join(__dirname, "public")));

// Handle React routing, send `index.html` for unmatched routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
// Email route
app.post("/mail", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  // Configure the mail transporter
  const transporter = await nodemailer.createTransport({
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

  // Mail options (sent to yourself, acknowledging the sender)
  const mailOptions = {
    from: `${email}`, // Sender's email
    to: `${process.env.EMAIL}`, // Your email (where you receive submissions)
    subject: "Portfolio Submission",
    text: `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  await transporter
    .sendMail(mailOptions)
    .then((info) => {
      res.status(200).json("Email sent successfully");
    })
    .catch((error) => {
      res.status(500).json("Failed to send email");
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
