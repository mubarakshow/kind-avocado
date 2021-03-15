const { Mailer } = require("../../services/mailer")

const trilineNG = new Mailer()

exports.handler = async (event) => {

  console.log('netlify functions event object', event.body)
  const { senderEmail, senderName, subject, message } = JSON.parse(event.body)

  trilineNG.sendEmail(
    `"${senderName}" <${senderEmail}>`,
    'mubarak.show@gmail.com',
    subject,
    message
  )
}