import 'dotenv/config';
import app from './app';
import { EnvConfig } from './config';

const startServer = async () => {
  try {
    await app.listen({ port: EnvConfig.HOST_PORT });
    console.log(`Server is running at http://localhost:${EnvConfig.HOST_PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

startServer();
