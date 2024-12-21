import { FastifyReply, FastifyRequest } from 'fastify';
import { verifyToken } from '../utils/jwt';

export const authMiddleware = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) throw new Error('Unauthorized');
    const decoded = verifyToken(token);
    req['user'] = decoded;
  } catch (error) {
    reply.status(401).send({ message: 'Unauthorized' });
  }
};
