/* eslint-disable */
// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default function ({req, env, isServer}) {
  if(!req._body) {
    console.log('Please visit /contacts to submit form')
    return
  }
  const userAgent = isServer ? req.headers['user-agent'] : navigator.userAgent
  const AUTHORS_EMAIL= process.env.EMAIL_TO
  const SG_SUBJECT_USER = process.env.EMAIL_SUBJECT_USER
  const SG_SUBJECTT_ME = process.env.EMAIL_SUBJECT_USER
  const SEND_GRID_OBJ = JSON.parse(req.body.VARS_OBJ)
  const { email, message, fname, lname } = SEND_GRID_OBJ

  console.log(SEND_GRID_OBJ);

  const sendToUser = {
    to: email,
    from: AUTHORS_EMAIL,
    subject: EMAIL_SUBJECT_USER,
    html: `<strong>Hi, ${fname}</strong>, Thanks for the email at thomasongeri.com. I will write back to you shortly,
            Thomas`
  }

  const sendToMe = {
    to: AUTHORS_EMAIL,
    from: email,
    subject: SG_SUBJECTT_ME,
    html: `Message from ${fname} ${lname} |${email}| ${message} | ${userAgent}`
  }

  sgMail.send(sendToUser)
  sgMail.send(sendToMe)
}
