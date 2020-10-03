const nodemailer = require('nodemailer');
const keys = require('../config/key')

console.log("email,pass",keys.EMAIL,keys.PASSWORD)
function mailer(props) {
    const {msg,email} = props;
    var transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        secure: false,
        auth: {
          user: keys.EMAIL, // generated ethereal user
          pass: keys.PASSWORD, // generated ethereal password
        },
      });
      var mailinfo = {
        from: keys.EMAIL, // sender address
        to: email, 
        subject: "Registration", // Subject line
        text:'text', // plain text body
        html:msg
      };
      transporter.sendMail(mailinfo,function(err,data){
          if(err){
              console.log('errors')
          }
          else{
              console.log('Email sent')
          }
      })
}
module.exports = mailer;