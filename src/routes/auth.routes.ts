import { FastifyInstance } from 'fastify';
import { registerHandler, loginHandler } from '../controllers/auth.controller';

const authRoutes = async (app: FastifyInstance) => {
  app.post('/register', registerHandler);
  app.post('/login', loginHandler);
};

export default authRoutes;
