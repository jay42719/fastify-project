import jwt from 'jsonwebtoken';
import { EnvConfig } from '../config';

const JWT_SECRET = EnvConfig.JWT_SECRET;

interface JwtPayload {
  email: string;
  iat: number; // Issued at timestamp
  exp: number; // Expiration timestamp
}

export const signToken = (email: string): string => {
  return jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
};

export const verifyToken = (token: string): JwtPayload => {
  return jwt.verify(token, JWT_SECRET) as JwtPayload;
};
