import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`MongoDB connection Failed: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
