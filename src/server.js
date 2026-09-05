const app = require("./app");
const env = require("./config/env");
const prisma = require("./config/prisma");
const startServer = async () => {
  try {
    await prisma.$connect();

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
  }  catch (error) {
    console.error('Unable to connect to PostgreSQL:', error.message);
    await prisma.$disconnect();
    process.exit(1);
  }
};

startServer();
