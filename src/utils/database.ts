import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    console.log("process.env.MONGO_URI ::", process.env.MONGO_URI)
    await mongoose.connect(process.env.MONGO_URI || '');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  }
};
