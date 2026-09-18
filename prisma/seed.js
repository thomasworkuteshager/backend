const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.researchArea.createMany({
    data: [
      {
        title: "Artificial Intelligence & Data Science",
        description:
          "Research in artificial intelligence and data science.",
        displayOrder: 1,
        status: "published",
      },
      {
        title: "Communication Systems",
        description:
          "Research in communication systems.",
        displayOrder: 2,
        status: "published",
      },
      {
        title: "Power and Energy Systems",
        description:
          "Research in power and energy systems.",
        displayOrder: 3,
        status: "published",
      },
    ],
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });