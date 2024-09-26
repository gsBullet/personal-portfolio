require("dotenv").config(); // Load environment variables
const nodemailer = require("nodemailer");

exports.handler = async function (req, res) {
  const { firstName, lastName, email, message } = JSON.parse(req.body);
  console.log(JSON.parse(req.body));
  

  // Configure the mail transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  // Mail options (send the email to yourself)
  const mailOptions = {
    from: email, // Sender's email
    to: process.env.EMAIL, // Your email
    subject: "Portfolio Submission",
    text: `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Try to send the email and handle errors
  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify("Email sent successfully"),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify("Failed to send email"),
    };
  }
};
