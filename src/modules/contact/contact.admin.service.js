const prisma = require("../../config/prisma");

// Main Office
const upsertMainOffice = async (data) => {
  const existing = await prisma.mainOffice.findFirst();
  if (existing) {
    return prisma.mainOffice.update({ where: { id: existing.id }, data });
  }
  return prisma.mainOffice.create({ data });
};

// Departments
const createDepartment = async (data) => prisma.department.create({ data });
const getDepartments = async () =>
  prisma.department.findMany({ orderBy: { displayOrder: "asc" } });
const getDepartmentById = async (id) =>
  prisma.department.findUnique({ where: { id } });
const updateDepartment = async (id, data) =>
  prisma.department.update({ where: { id }, data });
const deleteDepartment = async (id) =>
  prisma.department.delete({ where: { id } });

// Staff Contacts
const createStaffContact = async (data) => prisma.staffContact.create({ data });
const updateStaffContact = async (id, data) =>
  prisma.staffContact.update({ where: { id }, data });
const deleteStaffContact = async (id) =>
  prisma.staffContact.delete({ where: { id } });

// Social Links (Global)
const createSocialLink = async (data) => prisma.socialLink.create({ data });
const getSocialLinks = async () =>
  prisma.socialLink.findMany({ orderBy: { displayOrder: "asc" } });
const updateSocialLink = async (id, data) =>
  prisma.socialLink.update({ where: { id }, data });
const deleteSocialLink = async (id) =>
  prisma.socialLink.delete({ where: { id } });

// Quick Contact Cards
const createQuickContactCard = async (data) =>
  prisma.quickContactCard.create({ data });
const getQuickContactCards = async () =>
  prisma.quickContactCard.findMany({ orderBy: { displayOrder: "asc" } });
const updateQuickContactCard = async (id, data) =>
  prisma.quickContactCard.update({ where: { id }, data });
const deleteQuickContactCard = async (id) =>
  prisma.quickContactCard.delete({ where: { id } });

// Campus Address
const upsertCampusAddress = async (data) => {
  const existing = await prisma.campusAddress.findFirst();
  if (existing) {
    return prisma.campusAddress.update({ where: { id: existing.id }, data });
  }
  return prisma.campusAddress.create({ data });
};

// Office Hours
const createOfficeHour = async (data) => prisma.officeHour.create({ data });
const getOfficeHours = async () =>
  prisma.officeHour.findMany({ orderBy: { displayOrder: "asc" } });
const updateOfficeHour = async (id, data) =>
  prisma.officeHour.update({ where: { id }, data });
const deleteOfficeHour = async (id) =>
  prisma.officeHour.delete({ where: { id } });

// Form Submissions (Admin view)
const getSubmissions = async () =>
  prisma.formSubmission.findMany({ orderBy: { createdAt: "desc" } });
const getSubmissionById = async (id) =>
  prisma.formSubmission.findUnique({ where: { id } });
const updateSubmissionStatus = async (id, status) => {
  const data = { status };
  if (status === "replied") data.respondedAt = new Date();
  return prisma.formSubmission.update({ where: { id }, data });
};

module.exports = {
  upsertMainOffice,
  createDepartment,
  getDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
  createStaffContact,
  updateStaffContact,
  deleteStaffContact,
  createSocialLink,
  getSocialLinks,
  updateSocialLink,
  deleteSocialLink,
  createQuickContactCard,
  getQuickContactCards,
  updateQuickContactCard,
  deleteQuickContactCard,
  upsertCampusAddress,
  createOfficeHour,
  getOfficeHours,
  updateOfficeHour,
  deleteOfficeHour,
  getSubmissions,
  getSubmissionById,
  updateSubmissionStatus,
};