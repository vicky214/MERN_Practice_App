const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const router = express.Router();
const Event = require('../models/event')
const User = require('../models/user')
const mailer = require('../Utilitty/mailer');
var otpGenerator = require('otp-generator')


router.get('/otp',(req,res)=>{
    const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });
    const message=`Otp is ${otp} `;
    const emaildata = {
       email:req.body.email,
       msg:message
     }
    //  mailer(emaildata)
     return res.json(otp)
})

router.post('/signup',(req,res)=>{
    const {name,email,phone,password} = req.body;
    if(!email || !password || !name || !phone){
        return res.status(422).json({error:"please add all the fields"})
     }
     const userData = {
         email,
         password,
         name,
         phone,
     }    
     User.findOne({email:email})
     .then(user=>{
         if(!user){
             bcrypt.hash(password, 10, (err,hash)=>{
                 userData.password = hash
                 User.create(userData)
                     .then(user=>{
                        req.session.currentuser = user;
                        res.json({message: 'registered succesfully'})
                     })
                     .catch(err=>{
                         res.send('error: ' + err)
                     })
             })
         }
         else{
             res.json({error: 'user already exists'})
         }
     })
     .catch(err=>{
         res.send('error: ' + err)
     })
 })
 
 router.post('/login',(req,res)=>{
     const {email,password} = req.body
     if(!email || !password){
        return res.status(422).json({error:"please add email or password"})
     }
     User.findOne({email:email})
     .then(user=>{
         if (!user){
             return res.json({error:"Invalid email or password"})
         }
         bcrypt.compare(password,user.password)
         .then(doMatch=>{
             if(doMatch){
                req.session.currentuser = user
                console.log('login',req.session.currentuser)
                res.json({message: 'login succesfully'})
             }
             else{
                 return res.json({error:"Invalid Email or Password"})
             }
         })
         .catch(err=>{
             console.log(err)
         })
 
     })
 })

router.post('/form',(req,res)=>{
    const {eventname,date,organize,description} = req.body;
    const eventDetail ={
        eventname,
        date,
        organize,
        description
    }
    Event.create(eventDetail)
    .then(data=>{
         res.json({message:"Event has saved"})
    })
    .catch(err=>{
         res.json({error:"Event not saved"})
    })
    .catch(err=>{
        console.log(err)
    })

})

router.get('/data',(req,res)=>{
    console.log(req.session.currentuser)
    Event.find({})
    .then(data=>{
        res.json({data})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/auth/session',(req,res)=>{
    const t = req.session.currentuser
    console.log('yes',t)
    if(req.session.currentuser){
        return res.json({
            auth:true,
            message: "you are signed"
        })
    }
    return res.json({
        auth:false,
        message:"you are not login"
    });
})

module.exports = router;
