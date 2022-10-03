if (process.env.NODE !== "production") {
  require("dotenv").config()
}

const express = require("express")
const bodyParser = require('body-parser'); // parser middleware
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")

const flash = require("express-flash") // 
const session = require("express-session") // session middleware

const userRoute = require("./routes/userRoute")//
const userSchema = require("./models/userSchema")
const config = require('./configs/config')
const verifyToken = require('./validateToken')
const verifyNoToken = require('./validateNoToken')

const app = express()
app.set('llave', config.llave);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
PORT = 3000
app.listen(PORT)

app.set("view-engine", "ejs")
app.use(express.json())
app.use("/login", userRoute)
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(
  session({
    secret: process.env.DB_CONNECTION,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
  }
  ))

//verification user password
authUser = async (req, res, next) => {
  const user = await userSchema.findOne({ email: req.body.email })
  console.log(`Value of "User" in authUser function ----> ${user}`)
  try {
    if (user) {
      const password = await bcrypt.compare(req.body.password, user.password);
      console.log(`is Password?: ${password}`)
      if (password) {

        const token = jwt.sign({
          name: user.name,
          id: user._id
        }, process.env.TOKEN_SECRET,
          { expiresIn: "1h" })

        // res.header('auth-token', token)
        //   .json({
        //     error: null,
        //     data: { token }
        //   })

        console.log(token)
        next()

      } else {
        res.render("login.ejs", { messages : 'Contrase\361a Incorrecta' })
      }

    } else {
      res.render("login.ejs",{ messages : "Usuario No Registrado"})

    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error Occured");
  }
}

//user homepage
app.get("/", verifyToken, (req, res) => {
  res.render("index.ejs", { name: "Usuario" })
})

//login
app.get("/login",verifyNoToken,(req, res) => {
  res.render("login.ejs", { messages: "" })
})

app.post(
  "/login",
  authUser,
  (req, res) => {
    console.log('app post............')
    res.redirect('/index')
  }
)

//index
app.get("/index", (req, res) => {
  res.render("index.ejs", { name: "Usuario" })
})


//register
app.get("/register", verifyNoToken, (req, res) => {
  res.render("register.ejs")
})

app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = userSchema({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    })

    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }))

    res.redirect("/login")

    console.log(typeof user)
    console.log(user)

  } catch {
    res.redirect("/register")
  }
})
//delete
app.delete("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err)
    }
    console.log("log out")
    res.redirect("/login")
  })
})