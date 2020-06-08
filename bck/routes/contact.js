var nodemailer = require('nodemailer');
const express = require('express')
const creds = require('../config/index');
const router =express.Router(); 

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
    var firstname = req.body.firstname
    var lastname = req.body.lastname
    var phone = req.body.phone
    var email = req.body.email
    var msg = req.body.msg
    var content = `firstname: ${firstname} \n phone: ${phone} \n  lastname: ${lastname}\n email: ${email} \n message: ${msg} `
  
    var mail = {
      from: firstname,
      to: 'hammazitouni77@gmail.com',  //Change to email address that you want to receive messages on
      subject: 'New Message from Contact Form',
      text: content
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  })
  module.exports = router; 