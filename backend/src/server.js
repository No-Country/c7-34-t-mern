if (process.env.NODE !== "production") {
  require("dotenv").config()
}

const express = require("express")
const cors = require("cors") //enable cors
const testRoute = require("./routes/testRoute")
const userRoute = require("./routes/userRoute")
const balanceRoute = require("./routes/balanceRoute")
const connectDB = require("./configs/db")
connectDB()

const app = express()
app.use(cors())
PORT = 4000
app.listen(process.env.PORT || PORT, () => console.log("run server " + PORT))
app.use("/test", testRoute)
app.use("/", userRoute)
app.use("/balance", balanceRoute)

module.exports = app