import { FastifyError, FastifyReply, FastifyRequest } from 'fastify';

export const errorMiddleware = (
  error: FastifyError,
  _: FastifyRequest,
  reply: FastifyReply
) => {
  reply.status(error.statusCode || 500).send({
    message: error.message || 'Internal Server Error',
  });
};
