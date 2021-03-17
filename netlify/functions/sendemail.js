// import { Mailer } from "../../services/mailer";
const { createTransport, getTestMessageUrl } = require("nodemailer");

// const trilineNG = new Mailer();

exports.handler = async (event) => {
  const nodemailerTestTransport = createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    service: "",
    secure: false,
    auth: {
      user: "delbert.stanton82@ethereal.email",
      pass: "BvhZYW5farSh7UWmGu",
    },
  });

  nodemailerTestTransport.verify((err, info) => {
    if (err) return console.log("error verifying transport ⛔", err.message);
    return console.log("Transpor verfied ✔");
  });
  console.log("netlify functions event object", event.body);
  const { senderEmail, senderName, subject, message } = JSON.parse(event.body);

  nodemailerTestTransport.sendMail(
    {
      from: `"${senderName}" <${senderEmail}>`,
      to: "delbert.stanton82@ethereal.email",
      subject: subject,
      text: message,
      html: `<h2>${message}</h2>`,
    },
    (error, info) => {
      if (error) {
        console.log("error sending email", error.message);
      } else {
        console.log("SEND MAIL INFO ===>>>", info);
        console.log("Preview URL: %s", getTestMessageUrl(info));
      }
    }
  );
};
