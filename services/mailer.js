const nodemailer = require("nodemailer")

class Mailer {
  constructor(
    transporter = {
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
    }
  ) {
    // define new user
    this.transporter = transporter;
  }

  // send email
  async sendEmail(from, receiverEmail, subject, message, callback) {
    let transport = await nodemailer.createTransport(this.transporter);
    // transport.verify((err, success) => {
    //   if (err) return console.log('Transporter Err', err)
    //   console.log('Server is ready to take our messages')
    // })
    
    const email = {
      from: from,
      to: receiverEmail,
      subject: subject,
      text: message
    };
    // console.log('hitting sendMail')
    transport.sendMail(email, callback);
    // console.log('after hitting sendMail')
  }

  // get current transporter details
  getDetails() {
    return this.transporter;
  }
}

module.exports = {
  Mailer
}