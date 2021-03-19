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

const mailhogTransporter = nodemailer.createTransport({
  host: "localhost",
  service: "mailhog",
  port: 1025,
  secure: false, // true for 465, false for other ports
  pool: true,
  logger: true,
  // auth: {
  //   user: 'user' ,
  //   pass: 'pass',
  // }
})

exports.handler = async function (event, context) {
  const { senderEmail, senderName, subject, message } = JSON.parse(event.body);
  
  const response = await new Promise((resolve, reject) => {
    mailhogTransporter.sendMail(
      {
        from: `"${senderName}" <${senderEmail}>`,
        to: process.env.CONTACT_EMAIL,
        subject: subject,
        text: message,
        html: `<h2>${message}</h2>`,
      },
      (error, info) => {
        if (error) {
          return reject("error sending email", error.message);
        } else {
          resolve(info);
        }
      }
    );
  });
  
  return {
    statusCode: 200,
    body: JSON.stringify(response)
  }  
};
