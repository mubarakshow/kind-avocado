const { Mailer } = require("../../services/mailer");

// const trilineNG = new Mailer();
const nodemailerTest = new Mailer({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'delbert.stanton82@ethereal.email',
      pass: 'BvhZYW5farSh7UWmGu'
  }
});

exports.handler = async (event) => {
  console.log("netlify functions event object", event.body);
  const { senderEmail, senderName, subject, message } = JSON.parse(event.body);

  nodemailerTest.sendEmail(
    `"${senderName}" <${senderEmail}>`,
    "mubarak.show@gmail.com",
    subject,
    message
  );
};
