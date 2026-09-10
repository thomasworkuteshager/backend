const prisma = require("../../config/prisma");

const getMainOffice = async () => {
  return prisma.mainOffice.findFirst({
    where: { status: "published" },
  });
};

const getDepartments = async ({ search, page = 1, limit = 20 }) => {
  const skip = (page - 1) * limit;
  const where = { status: "published" };

  if (search) {
    where.OR = [
      { name: { contains: search, mode: "insensitive" } },
      { head: { contains: search, mode: "insensitive" } },
      { description: { contains: search, mode: "insensitive" } },
    ];
  }

  const [departments, total] = await Promise.all([
    prisma.department.findMany({
      where,
      orderBy: { displayOrder: "asc" },
      skip,
      take: limit,
      include: {
        staffContacts: { where: { status: "published" } },
        socialLinks: { where: { status: "published" } },
      },
    }),
    prisma.department.count({ where }),
  ]);

  return { departments, total };
};

const getDepartmentById = async (id) => {
  return prisma.department.findUnique({
    where: { id },
    include: {
      staffContacts: { where: { status: "published" }, orderBy: { displayOrder: "asc" } },
      socialLinks: { where: { status: "published" } },
    },
  });
};

const getQuickContactCards = async () => {
  return prisma.quickContactCard.findMany({
    where: { status: "published" },
    orderBy: { displayOrder: "asc" },
  });
};

const getSocialLinks = async () => {
  return prisma.socialLink.findMany({
    where: { status: "published" },
    orderBy: { displayOrder: "asc" },
  });
};

const getCampusAddress = async () => {
  return prisma.campusAddress.findFirst({
    where: { status: "published" },
  });
};

const getOfficeHours = async () => {
  return prisma.officeHour.findMany({
    where: { status: "published" },
    orderBy: { displayOrder: "asc" },
  });
};

const submitForm = async (data) => {
  return prisma.formSubmission.create({ data });
};

const getContactPage = async () => {
  const [mainOffice, departments, quickCards, socialLinks, campusAddress, officeHours] =
    await Promise.all([
      getMainOffice(),
      getDepartments({}),
      getQuickContactCards(),
      getSocialLinks(),
      getCampusAddress(),
      getOfficeHours(),
    ]);

  return {
    mainOffice,
    departments: departments.departments,
    quickCards,
    socialLinks,
    campusAddress,
    officeHours,
  };
};

module.exports = {
  getMainOffice,
  getDepartments,
  getDepartmentById,
  getQuickContactCards,
  getSocialLinks,
  getCampusAddress,
  getOfficeHours,
  submitForm,
  getContactPage,
};