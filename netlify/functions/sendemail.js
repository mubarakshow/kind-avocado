const nodemailer = require("nodemailer");

const nodemailerTestTransport = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  service: "",
  secure: false,
  auth: {
    user: "delbert.stanton82@ethereal.email",
    pass: "BvhZYW5farSh7UWmGu",
  },
});

exports.handler = async function (event, context) {
  const { senderEmail, senderName, subject, message } = JSON.parse(event.body);
  console.log("request body 🔑", event.body);
  console.log("sending message to delbert.stanton82@ethereal.email");

  const response = await new Promise((resolve, reject) => {
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
          return reject("error sending email", error.message);
        } else {
          resolve("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        }
      }
    );
  });
  console.log('final response: 👉', response);
};
