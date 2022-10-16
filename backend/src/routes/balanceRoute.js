const express = require("express")
const bodyParser = require("body-parser") // body parser middleware
const cors = require("cors") //enable cors
const session = require("express-session") // session middleware on the server side
const balanceSchema = require("../models/balanceSchema")

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
    session({
        secret: process.env.DB_CONNECTION,
        resave: true,
        saveUninitialized: true,
        cookie: { secure: false },
    })
)

app.post("/balance", async (req, res) => {
    const user = balanceSchema(req.body)
    // now we set user password to hashed password
    //user.user = user.user + Date.now().toString();
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

// Get user income
app.get("/balance/:id", (req, res) => {
    const { id } = req.params
    balanceSchema
        .find({ user: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

// delete an user income
app.delete("/balance/:id", (req, res) => {
    const { id } = req.params
    balanceSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = app