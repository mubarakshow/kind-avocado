import { createTransport } from "nodemailer";

export class Mailer {
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
    let transport = await createTransport(this.transporter);
    
    
    const email = {
      from: from,
      to: receiverEmail,
      subject: subject,
      text: message
    };
    
    transport.sendMail(email, callback);
  }

  // get current transporter details
  getDetails() {
    return this.transporter;
  }
}