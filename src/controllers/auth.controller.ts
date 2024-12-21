import { FastifyReply, FastifyRequest } from 'fastify';
import { registerUser, loginUser } from '../services/user.service';
import { registerSchema, loginSchema } from '../schemas/auth.schema';
import { formatResponse, formatErrorResponse } from '../utils/responseFormatter';


export const registerHandler = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    // Validate request using Zod
    const { body } = registerSchema.parse(req);
    const message = await registerUser(body);
    return reply.status(200).send(formatResponse(message));
  } catch (error) {
    return reply.status(400).send(formatErrorResponse(error.message || 'Validation Error'));
  }
};

export const loginHandler = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    // Validate request using Zod
    const { body } = loginSchema.parse(req);
    const token = await loginUser(body);
    return reply.status(200).send(formatResponse({token}));
  } catch (error) {
    return reply.status(401).send(formatErrorResponse(error.message || 'Invalid Credentials'));
  }
};
