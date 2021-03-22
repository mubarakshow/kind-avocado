const nodemailer = require("nodemailer");

// const nodemailerTestTransport = nodemailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   service: "",
//   secure: false,
//   auth: {
//     user: "delbert.stanton82@ethereal.email",
//     pass: "BvhZYW5farSh7UWmGu",
//   },
// });

// const mailhogTransporter = nodemailer.createTransport({
//   host: "localhost",
//   service: "mailhog",
//   port: 1025,
//   secure: false, // true for 465, false for other ports
//   pool: true,
//   logger: true,
//   // auth: {
//   //   user: 'user' ,
//   //   pass: 'pass',
//   // }
// })

const signsAtTrilinengTransporter = nodemailer.createTransport({
  host: "mail.linesworth.com",
  port: 465,
  service: "",
  secure: true,
  auth: {
    user: process.env.CONTACT_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.handler = async function (event, context) {
  const { senderEmail, senderName, subject, message } = JSON.parse(event.body);

  const response = await new Promise((resolve, reject) => {
    signsAtTrilinengTransporter.sendMail(
      {
        from: `"Triline NG" <${process.env.CONTACT_EMAIL}>`,
        to: process.env.CONTACT_EMAIL,
        subject: `${
          subject == "Other" ? "Enquiry from " + senderName : subject + " from  " + senderName 
        }`,
        text: message,
        html: `
          <html>
            <head>
              <style>
              // css goes in here
                .mailbody {
                  border: thick double #ffe000;
                  padding: 1em 2em;
                }
              </style>
            </head>
            <body>
              <div class="mailbody">
                <p><b>Dear Triline NG<b>,</p>
                <br />
                <p>You have a message!</p>
                <p>Sender's Name: <b>${senderName}</b></p>
                <p>Sender's Email: <b>${senderEmail}</b></p>
                <p>Subject: <b>${subject}</b></p>
                <br />
                <p><b>===== Message =====</b></p>
                <p>${message}</p>
              </div>
            </body> 
          </html>        
        `,
      },
      (error, info) => {
        if (error) {
          return reject(`error sending email: ${error.message}`, error.message);
        } else {
          resolve(info);
        }
      }
    );
  });

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
  };
