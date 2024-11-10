const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();  // Load environment variables from .env file

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI;
        if (!mongoURI) {
            throw new Error("MONGODB_URI is not defined in .env file");
        }
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1); // Exit the process if MongoDB connection fails
    }
};

module.exports = connectDB;
