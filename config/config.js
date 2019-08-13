import dotenv from 'dotenv';

// loads environment variables from .env file in root folder
dotenv.config();

const config = {
  app: {
    port: parseInt(process.env.PORT) || 3000
  },
  db: {
    connectionString: `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds261377.mlab.com:61377/olympia` || 'localhost'
  }
};

export default config;