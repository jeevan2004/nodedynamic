const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        requierd: true,
        minLength:3
    },
    email:{
        type: String,
        requierd: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email id")
            }
        }
    },
    phone:{
        type: Number,
        requierd: true,
        min:10
    },
    message:{
         type: String,
        requierd: true,
        minLength:3
    }
})

// we need a collection 

const User = mongoose.model("User",userSchema );

module.exports = User;