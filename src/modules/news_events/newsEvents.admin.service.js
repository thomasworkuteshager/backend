const prisma = require("../../config/prisma");

const createCategory = async (data) => prisma.articleCategory.create({ data });
const getCategories = async () => prisma.articleCategory.findMany();

const createArticle = async (data) => prisma.newsArticle.create({ data });
const updateArticle = async (id, data) => prisma.newsArticle.update({ where: { id }, data });
const deleteArticle = async (id) => prisma.newsArticle.delete({ where: { id } });

const createEvent = async (data) => prisma.event.create({ data });
const updateEvent = async (id, data) => prisma.event.update({ where: { id }, data });
const deleteEvent = async (id) => prisma.event.delete({ where: { id } });

module.exports = {
  createCategory,
  getCategories,
  createArticle,
  updateArticle,
  deleteArticle,
  createEvent,
  updateEvent,
  deleteEvent,
};