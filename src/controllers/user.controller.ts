import { FastifyReply, FastifyRequest } from 'fastify';
import { getAllUsers } from '../services/user.service';
import {
  formatResponse,
  formatErrorResponse,
} from '../utils/responseFormatter';

export const getUsersHandler = async (
  _: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const users = await getAllUsers();
    return reply.status(200).send(formatResponse(users));
  } catch (error) {
    return reply
      .status(500)
      .send(formatErrorResponse(error.message || 'Server Error'));
  }
};
