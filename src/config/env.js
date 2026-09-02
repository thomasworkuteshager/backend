const dotenv = require('dotenv');

dotenv.config();

const env = {
  PORT: Number(process.env.PORT || 3000),
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL || 'file:./dev.db',
  JWT_SECRET: process.env.JWT_SECRET || 'development-secret',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d',
};

module.exports = env;
