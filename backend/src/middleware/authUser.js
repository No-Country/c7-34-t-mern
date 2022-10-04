const bcrypt = require("bcrypt")
const userSchema = require("../models/userSchema")
const jwt = require("jsonwebtoken")

//verification user password
authUser = async (req, res, next) => {
  const user = await userSchema.findOne({ email: req.body.email })
  console.log(`Value of "User" in authUser function ----> ${user}`)
  try {
    if (user) {
      const password = await bcrypt.compare(req.body.password, user.password)
      console.log(`is Password?: ${password}`)
      if (password) {
        const token = jwt.sign(
          {
            name: user.name,
            id: user._id,
          },
          process.env.TOKEN_SECRET,
          { expiresIn: "1h" }
        )

        // res.header('auth-token', token)
        //   .json({
        //     error: null,
        //     data: { token }
        //   })

        console.log(token)
        next()
      } else {
        res.render("login.ejs", { messages: "Contrase\361a Incorrecta" })
      }
    } else {
      res.render("login.ejs", { messages: "Usuario No Registrado" })
    }
  } catch (error) {
    console.log(error)
    res.status(500).send("Internal Server error Occured")
  }
}

module.exports = authUser;