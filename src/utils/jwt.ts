import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const signToken = (email: string): string => {
  return jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, JWT_SECRET);
};
