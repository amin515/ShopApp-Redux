
import mongoose from "mongoose";

const connectMongoDB = async() => {
  try {
    let connect = await mongoose.connect(process.env.MONGO_STRING)
    console.log(`Mongodb connect with ${connect.connection.host}`.bgCyan.black)
  } catch (error) {
    console.log(error.message)
  }
}

// export

export default connectMongoDB;