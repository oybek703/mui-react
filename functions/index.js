const functions = require('firebase-functions')
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')
const config = functions.config()
admin.initializeApp()

const transporter = nodemailer.createTransport({service: 'Gmail',
  auth: {user: config.user.email, pass: config.user.password}})

let mailOptions = {
  from: 'Arc Development',
  to: 'hhoybek@gmail.com',
  subject: 'Testing nodemailer',
  text: 'Test successful',
  html: `<h1>You are welcome!</h1>`
}

exports.sendMail = functions.https.onRequest((request, response) => {
    response.set('Access-Control-Allow-Origin', '*')
    transporter.sendMail(mailOptions, err => {
        if(err) {
            response.status(500).send(err)
        } else {
            response.status(200).send('Message send successfully!')
        }
    })
})
