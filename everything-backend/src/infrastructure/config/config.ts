type NodeEnv = 'development' | 'staging' | 'production';

export interface AppConfig {
  nodeEnv: NodeEnv;
  port: number;
}

function getEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

export function loadConfig(): AppConfig {
  const nodeEnv = (process.env.NODE_ENV || 'development') as NodeEnv;

  if (!['development', 'staging', 'production'].includes(nodeEnv)) {
    throw new Error(`Invalid NODE_ENV value: ${nodeEnv}`);
  }

  const portRaw = getEnv('PORT');

  const port = Number(portRaw);
  if (Number.isNaN(port)) {
    throw new Error(`PORT must be a number, got: ${portRaw}`);
  }

  return {
    nodeEnv,
    port,
  };
}
