const mongoose = require("mongoose")
const dotenv = require("dotenv")
const passportLocalMongoose = require("passport-local-mongoose")
dotenv.config()

const balanceSchema = mongoose.Schema({ 
  user: { 
    type: String, 
    required: true
  },
  activity: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  amount: {
    type: Number,
    required: true
  },
  balance_type : {
    type: String
  }
})

balanceSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model("balance", balanceSchema)