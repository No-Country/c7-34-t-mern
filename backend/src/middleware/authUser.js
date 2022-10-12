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
          {
            expiresIn: 86400,
          }
        )
        req.session.token = token;
        let nDatos={...user, token}
        console.log("Login Sucessfull")
        res.status(200).json(nDatos)
      } else {
        res.status(400).json("Wrong Password")
      }
    } else {
      res.status(400).json("Unregistered User")
    }
  } catch (error) {
    console.log(error)
    res.status(500).send("Internal Server error Occured")
  }
}

module.exports = authUser;