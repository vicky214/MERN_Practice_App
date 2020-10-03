const mongoose = require('mongoose')
const eventSchema = new mongoose.Schema({
    eventname:{
        type:String,
        required:true
    },
    organize:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Event",eventSchema);