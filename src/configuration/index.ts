import 'dotenv/config';

export const DATA_BASE_CONFIGURATION = {
  mongoConnectionString: process.env.MONGO_CONNECTION_STRING as string,
  DATABASE_NAME: 'test1'
};
