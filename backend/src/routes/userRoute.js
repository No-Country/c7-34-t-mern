const express = require("express")
const bodyParser = require("body-parser") // body parser middleware
const cors = require("cors") //enable cors
const session = require("express-session") // session middleware on the server side

const verifyToken = require("../middleware/validateToken")
const verifyNoToken = require("../middleware/validateNoToken")
const authUser = require("../middleware/authUser")
const registerUser = require("../middleware/registerUser")
//const config = require("./configs/config")

const app = express()
//app.set("llave", config.llave)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())
app.set("view-engine", "ejs")
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

//user homepage
app.get("/", verifyToken, (req, res) => {
  res.render("index.ejs", { name: "Usuario" })
})

//login
app.get("/login", verifyNoToken, (req, res) => {
  res.render("login.ejs", { messages: "" })
})

app.post("/login", authUser)

//index
app.get("/index",verifyToken, (req, res) => {
  res.render("index.ejs", { name: "Usuario" })
})

//register
app.get("/register", verifyNoToken, (req, res) => {
  res.render("register.ejs")
})

app.post("/register", registerUser)

//logout
app.post('/logout',verifyToken ,(req, res) => {
  req.session.token = null;
  res.redirect('/login')
})

module.exports = app