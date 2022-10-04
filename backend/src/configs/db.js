import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    const connection = mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParse: true,
      useUnifiedTopology: true,
    })
    const url = `${connection.connection.host}:${connection.connection.port}`
    console.log(`MongoDB conected to: ${url}`)
  } catch (error) {
    console.error(`error: ${error.message}`)
    process.exit(1)
  }
}

/* mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error)) */
