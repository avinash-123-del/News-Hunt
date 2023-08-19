import mongoose from "mongoose";

const mongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database connected")
    } catch (error) {
        console.log("Connection Failed",error);
    }
}

export default mongoDB;