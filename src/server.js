<<<<<<< HEAD
const app = require("./app");
const env = require("./config/env");
const prisma = require("./config/prisma");
=======
const app = require('./app');
const env = require('./config/env');
const prisma = require('./config/database');
>>>>>>> 255717ba5ac0dc224ec37f7fb6d2ca33102ff769

const startServer = async () => {
  try {
    await prisma.$connect();
<<<<<<< HEAD

    console.log("Database connected successfully");

    const server = app.listen(env.PORT, () => {
      console.log(`Server running on port ${env.PORT}`);
      console.log(`Environment: ${env.NODE_ENV}`);
    });

    const shutdown = async (signal) => {
      console.log(`${signal} received. Shutting down...`);

      server.close(async () => {
        await prisma.$disconnect();

        console.log("Database disconnected");
        console.log("Server closed");

        process.exit(0);
      });
    };

    process.on("SIGINT", () => shutdown("SIGINT"));
    process.on("SIGTERM", () => shutdown("SIGTERM"));
  } catch (error) {
    console.error("Failed to start server:", error);

    await prisma.$disconnect();

=======
    app.listen(env.PORT, () => {
      console.log(`Server running on http://localhost:${env.PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to PostgreSQL:', error.message);
    await prisma.$disconnect();
>>>>>>> 255717ba5ac0dc224ec37f7fb6d2ca33102ff769
    process.exit(1);
  }
};

<<<<<<< HEAD
startServer();
=======
startServer();
>>>>>>> 255717ba5ac0dc224ec37f7fb6d2ca33102ff769
