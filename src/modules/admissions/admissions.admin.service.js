const prisma = require("../../config/prisma");

const createProgram = async (data) => prisma.admissionProgram.create({ data });
const getPrograms = async () => prisma.admissionProgram.findMany({ include: { deadlines: true } });
const getProgramById = async (id) => prisma.admissionProgram.findUnique({ where: { id }, include: { deadlines: true } });
const updateProgram = async (id, data) => prisma.admissionProgram.update({ where: { id }, data });
const deleteProgram = async (id) => prisma.admissionProgram.delete({ where: { id } });

const createDeadline = async (data) => prisma.admissionDeadline.create({ data });
const updateDeadline = async (id, data) => prisma.admissionDeadline.update({ where: { id }, data });
const deleteDeadline = async (id) => prisma.admissionDeadline.delete({ where: { id } });

module.exports = {
  createProgram,
  getPrograms,
  getProgramById,
  updateProgram,
  deleteProgram,
  createDeadline,
  updateDeadline,
  deleteDeadline,
};