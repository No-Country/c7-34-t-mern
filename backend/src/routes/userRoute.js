const bcrypt = require("bcrypt")
const express = require("express")
const userSchema = require("../models/userSchema")

const router = express.Router()

// create user
router.post("/users", async (req, res) => {
  const user = userSchema(req.body)
  const salt = await bcrypt.genSalt(10)
  // now we set user password to hashed password
  user.password = await bcrypt.hash(user.password, salt)

  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))

})

// get all users
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))

})

// get user by id
router.get("/users/:id", (req, res) => {
  const { id } = req.params
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})


// update an user
router.put("/users/:id", (req, res) => {
  const { id } = req.params
  const { name, age, email } = req.body
  userSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

// delete an user
router.delete("/users/:id", (req, res) => {
  const { id } = req.params
  userSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
})

module.exports = router