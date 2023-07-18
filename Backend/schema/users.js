const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    Fullname:{
        type:String,
        required:false
    },
    avatar :{
        type:String,
        required:false
    },date:{
        type:Date,
        required:false
    },bio:{
        type:String,
        required:false
    },birthDate:{
        type:Date,
        required:false
    },regStatus :{
        type:Number,
        default:0,
    }

})


module.exports = mongoose.model('user',UserSchema);