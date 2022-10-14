const mongoose = require("mongoose")
const dotenv = require("dotenv")
const passportLocalMongoose = require("passport-local-mongoose")
dotenv.config()

const expenseSchema = mongoose.Schema({
    task: {
        type: String
    },
    expense: {
        type: Number
    }
})

expenseSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model("expense", expenseSchema)