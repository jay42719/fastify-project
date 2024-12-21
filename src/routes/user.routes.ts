import { FastifyInstance } from 'fastify';
import { getUsersHandler } from '../controllers/user.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const userRoutes = async (app: FastifyInstance) => {
  app.get('/', { preHandler: [authMiddleware] }, getUsersHandler);
};

export default userRoutes;
