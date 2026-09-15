const prisma = require("../../config/prisma");

const getPrograms = async (level) => {
  const where = { status: "published" };
  if (level) where.level = level;

  return prisma.admissionProgram.findMany({
    where,
    include: {
      deadlines: {
        where: { status: "published" },
        orderBy: { deadlineDate: "asc" },
      },
    },
    orderBy: { createdAt: "desc" },
  });
};

const getProgramBySlug = async (slug) => {
  return prisma.admissionProgram.findFirst({
    where: { slug, status: "published" },
    include: {
      deadlines: {
        where: { status: "published" },
        orderBy: { deadlineDate: "asc" },
      },
    },
  });
};

module.exports = {
  getPrograms,
  getProgramBySlug,
};