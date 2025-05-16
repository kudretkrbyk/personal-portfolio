const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async ({ name, email, subject, message }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name} via Kudret Site" <${process.env.EMAIL_USER}>`, // ✅ Görünen ad değişir
    to: process.env.EMAIL_USERTO,
    subject: `İletişim Formu - ${subject}`,
    html: `
      <h3>Yeni iletişim mesajı</h3>
      <p><strong>İsim:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Konu:</strong> ${subject}</p>
      <p><strong>Mesaj:</strong> ${message}</p>
    `,
    replyTo: email, // ✅ Yanıtla butonu gönderene gider
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
