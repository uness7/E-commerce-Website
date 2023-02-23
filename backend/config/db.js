const mongoose = require('mongoose');







const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true); // if set true => strict schema
        mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true });
    } catch (error) {
      console.log(error)
      process.exit(1)
    }
}

module.exports = {
    connectDB,
}