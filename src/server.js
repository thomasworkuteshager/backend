const app = require('./app');
const env = require('./config/env');
const prisma = require('./config/database');

const startServer = async () => {
  try {
    await prisma.$connect();
    app.listen(env.PORT, () => {
      console.log(`Server running on http://localhost:${env.PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to PostgreSQL:', error.message);
    await prisma.$disconnect();
    process.exit(1);
  }
};

startServer();
