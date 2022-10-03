const mongoose = require("mongoose")
const passportLocalMongoose = require('passport-local-mongoose');

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error))

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
})

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema)