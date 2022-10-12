const bcrypt = require("bcrypt")
const userSchema = require("../models/userSchema")

registerUser = async (req, res) => {
    const userExist = await userSchema.findOne({ email: req.body.email })
    if (userExist) {
        res.status(400).json("User Already Registered")
        return;
    }
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

        res.status(200).json("User Successfully Registered")
        console.log("User Successfully Registered")
        console.log(user)
    } catch {
        console.log("Server Error")
        res.status(400)
    }
}
module.exports = registerUser;