 const functions = require('firebase-functions')
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')
const config = functions.config()
admin.initializeApp()

const transporter = nodemailer.createTransport({service: 'Gmail',
  auth: {user: config.user.email, pass: config.user.password}})

let mailOptions = {}

exports.sendMail = functions.https.onRequest((req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    const {name, email, phone, message} = req.query
    mailOptions = {
        from: 'Arc Development',
        to: 'hohoybek@gmail.com',
        subject: 'Message received!',
        html: `
            <p style="font-size: 16px">From: ${name}</p>
            <p style="font-size: 16px">Email: ${email}</p>
            <p style="font-size: 16px">Phone: ${phone}</p>
            <p style="font-size: 16px">Message: ${message}</p>
        `
    }
    transporter.sendMail(mailOptions, err => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send('Message send successfully!')
        }
    })
    mailOptions = {
        from: 'Arc Development',
        to: email,
        subject: 'We have received your message!',
        html: `
            <h2 style="font-size: 16px; text-align: center">Arc Development</h2>
            <p style="font-size: 16px">Email: muireact@gmail.com</p>
            <p style="font-size: 16px">Phone: +99890-123-45-67</p>
            <p style="font-size: 16px">Message: Hello ${name}, we received your message. 
            Thanks for your attention. We will contact you soon...    
            </p>
        `
    }
    transporter.sendMail(mailOptions, err => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send('Message delivered to user!')
        }
    })
})
