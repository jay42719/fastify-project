import mongoose from 'mongoose';
import { EnvConfig } from '../config';

export const connectDB = async () => {
  try {
    await mongoose.connect(EnvConfig.MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  }
};
