const mongoose = require("mongoose")
const dotenv = require("dotenv")
const passportLocalMongoose = require("passport-local-mongoose")
dotenv.config()

const incomeSchema = mongoose.Schema({
  task: {
    type: String
  },
  income: {
    type: Number
  }
})

incomeSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model("income", incomeSchema)