const mongoose = require("mongoose")

function connectDB() {
  mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => {
    console.log(`MongoDB Atlas Connected to: ${conn.connection.host}`);
    //do other things
  })
  .catch((error) => {
    console.log(`Error: ${error.message}`);
    process.exit();
  });
}

module.exports = connectDB