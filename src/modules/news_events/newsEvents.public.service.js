const prisma = require("../../config/prisma");

const getNewsArticles = async ({ category, isFeatured }) => {
  const where = { status: "published" };
  if (category) where.category = { slug: category };
  if (isFeatured !== undefined) where.isFeatured = isFeatured === "true";

  return prisma.newsArticle.findMany({
    where,
    include: { category: true },
    orderBy: { publishedAt: "desc" },
  });
};

const getArticleBySlug = async (slug) => {
  return prisma.newsArticle.findFirst({
    where: { slug, status: "published" },
    include: { category: true },
  });
};

const getEvents = async () => {
  return prisma.event.findMany({
    where: { status: "published" },
    orderBy: { startDate: "asc" },
  });
};

const registerForEvent = async (data) => {
  return prisma.eventRegistration.create({ data });
};

module.exports = {
  getNewsArticles,
  getArticleBySlug,
  getEvents,
  registerForEvent,
};