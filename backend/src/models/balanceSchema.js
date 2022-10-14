const mongoose = require("mongoose")
const dotenv = require("dotenv")
const passportLocalMongoose = require("passport-local-mongoose")
dotenv.config()

// const incomeSchema = require("./incomeSchema")
// const expenseSchema = require("./expenseSchema")

const balanceSchema = mongoose.Schema({
  incomes: [{
    type: mongoose.Schema.Types.ObjectId,
    refs: 'income',
  }],
  expenses: [{
    type: mongoose.Schema.Types.ObjectId,
    refs: 'expense'
  }]
})
balanceSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model("balance", balanceSchema)