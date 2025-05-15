const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async ({ name, email, subject, message }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // senin gmail adresin
      pass: process.env.EMAIL_PASS, // google app password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USERTO, // kendine gönderiyorsun (info@ gibi)
    subject: `İletişim Formu - ${subject}`,
    html: `
      <h3>Yeni iletişim mesajı</h3>
      <p><strong>İsim:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Konu:</strong> ${subject}</p>
      <p><strong>Mesaj:</strong> ${message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
