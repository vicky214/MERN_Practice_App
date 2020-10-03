const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Cors = require('cors');
const session = require('express-session');
const {MONGOURI} = require('./config/key')
const route = require('./routes/route');
const cookieParser = require('cookie-parser')
const MongoStore = require("connect-mongo")(session) 
// const MongoDBStore = require("connect-mongodb-session")(session)
const app = express()

app.use(Cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


const PORT = process.env.PORT || 5000;


mongoose.connect(MONGOURI,{
    useUnifiedTopology: true,
    useNewUrlParser:true,
});
mongoose.connection.on('connected',()=>{
    console.log("connected to mongodb")
});

mongoose.connection.on('error',(err)=>{
    console.log("error during connection" ,err)
});

app.use(cookieParser());

app.use(session({
    secret:"ffdfjkhgjf",
    resave:false,
    saveUninitialized:false,
    rolling:true,
    store: new MongoStore({
        url:MONGOURI,
        mongooseConnection: mongoose.connection,
        collection: 'session'
      }),
    cookie:{
        maxAge: 1000*60*60*2,
        sameSite: false,

        // secure:true
    }
}))

app.get('/auth/sessions',(req,res)=>{console.log(req.session.currentuser)})

app.use('/',route)


app.listen(PORT,()=>{console.log(`Server is running on ${PORT}`)})