const mongoose = require('mongoose')
const databaseUrl =
  process.env.DATABASE_URL || "mongodb+srv://kyssangel18:O9MFVwLxeZvLAwCm@openclassroom.ur2luno.mongodb.net/?retryWrites=true&w=majority&appName=openclassroom/argentbank"

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
