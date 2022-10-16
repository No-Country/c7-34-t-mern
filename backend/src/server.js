if (process.env.NODE !== "production") {
  require("dotenv").config()
}

const express = require("express")
const testRoute = require("./routes/testRoute")
const userRoute = require("./routes/userRoute")
const balanceRoute = require("./routes/balanceRoute")
const connectDB = require("./configs/db")
connectDB()

const app = express()
PORT = 4000

app.listen(PORT)
app.use("/test", testRoute)
app.use("/", userRoute)
app.use("/balance", balanceRoute)


module.exports = app