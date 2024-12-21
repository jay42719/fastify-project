import User, { IUser } from '../models/user.model';
import { LoginRequest } from '../types/user';
import { signToken } from '../utils/jwt';
import bcrypt from 'bcrypt';

// Register a new user
export const registerUser = async (data: Partial<IUser>): Promise<string> => {
  const user = new User(data);
  await user.save();
  return 'User registered successfully';
};

// Login an existing user
export const loginUser = async (data: LoginRequest): Promise<string> => {
  const user = await User.findOne({ email: data.email }).select('+password');
  if (!user || !(await bcrypt.compare(data.password, user.password))) {
    throw new Error('Invalid credentials');
  }
  return signToken(user.email);
};

// Get all users
export const getAllUsers = async (): Promise<Array<IUser>> => {
  const users = await User.find({});
  return users;
};
