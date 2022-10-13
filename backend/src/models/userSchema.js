const mongoose = require("mongoose")
const dotenv = require("dotenv") 
const passportLocalMongoose = require("passport-local-mongoose")
dotenv.config()
//const balanceSchema = require("../models/balanceSchema")

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  balance:[{
    type: mongoose.Schema.Types.ObjectId,
    refs: 'balance'
    }]
})

userSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model("User", userSchema)