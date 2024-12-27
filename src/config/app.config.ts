export enum NODE_ENV_ENUM {
  LOCAL = 'local',
  DEV = 'dev',
  STAGE = 'stage',
  PRODUCTION = 'production',
}

export interface IEnvAppConfig {
  HOST_PORT: number;
  NODE_ENV: NODE_ENV_ENUM;
  MONGO_URI: string;
  JWT_SECRET: string;
}

export const EnvAppConfig: IEnvAppConfig = {
  HOST_PORT: Number(process.env.HOST_PORT) || 3000,
  NODE_ENV: (process.env.NODE_ENV as NODE_ENV_ENUM) || NODE_ENV_ENUM.LOCAL,
  MONGO_URI: process.env.MONGO_URI || `mongodb://localhost:27017/fastify_demo`,
  JWT_SECRET: process.env.JWT_SECRET || '1234',
};
