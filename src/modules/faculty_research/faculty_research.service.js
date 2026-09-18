const prisma = require("../../config/prisma");

const getResearchAreas = async () => {
  return prisma.researchArea.findMany({
    where: {
      status: "published",
    },
    orderBy: {
      displayOrder: "asc",
    },
  });
};

const getResearchAreaById = async (id) => {
  return prisma.researchArea.findFirst({
    where: {
      id,
      status: "published",
    },
  });
};

const createResearchArea = async (data) => {
  return prisma.researchArea.create({
    data: {
      title: data.title,
      description: data.description,
      icon: data.icon,
      displayOrder: data.displayOrder,
      status: data.status || "draft",
    },
  });
};

const updateResearchArea = async (id, data) => {
  return prisma.researchArea.update({
    where: {
      id,
    },
    data,
  });
};

const archiveResearchArea = async (id) => {
  return prisma.researchArea.update({
    where: {
      id,
    },
    data: {
      status: "archived",
    },
  });
};

module.exports = {
  getResearchAreas,
  getResearchAreaById,
  createResearchArea,
  updateResearchArea,
  archiveResearchArea,
};