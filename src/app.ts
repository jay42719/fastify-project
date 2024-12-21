import fastify from 'fastify';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import { connectDB } from './utils/database';
import { errorMiddleware } from './middlewares/error.middleware';

const app = fastify({ logger: true });

// Connect to the database
connectDB();

// Register routes
app.register(authRoutes, { prefix: '/api/auth' });
app.register(userRoutes, { prefix: '/api/users' });

// Register error handling middleware
app.setErrorHandler(errorMiddleware);

export default app;
