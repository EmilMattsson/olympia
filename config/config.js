import dotenv from 'dotenv';

// loads environment variables from .env file in root folder
dotenv.config();

const DEFAULT_PORT = 3000;

const config = {
  app: {
    port: parseInt(process.env.PORT) || DEFAULT_PORT
  },
  db: {
    connectionString:
      `mongodb://${process.env.DB_USER}:${
        process.env.DB_PASSWORD
      }@ds261377.mlab.com:61377/olympia` || 'localhost'
  }
};

export default config;