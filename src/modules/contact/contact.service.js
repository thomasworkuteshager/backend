const prisma = require("../../config/prisma");

/*
|--------------------------------------------------------------------------
| MAIN OFFICE
|--------------------------------------------------------------------------
*/

const getMainOffice = async () => {
  return prisma.mainOffice.findFirst({
    where: { status: "published" }
  });
};

const upsertMainOffice = async (data) => {
  const existing = await prisma.mainOffice.findFirst();
  if (existing) {
    return prisma.mainOffice.update({
      where: { id: existing.id },
      data
    });
  }
  return prisma.mainOffice.create({ data });
};

/*
|--------------------------------------------------------------------------
| DEPARTMENTS
|--------------------------------------------------------------------------
*/

const getDepartments = async ({ search, slug, status, page = 1, limit = 20 }) => {
  const skip = (page - 1) * limit;
  const where = {};

  if (slug) where.slug = slug;
  if (status && status !== 'all') where.status = status;
  if (!slug) where.status = 'published';

  let searchCondition = {};
  if (search) {
    searchCondition = {
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { head: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { location: { contains: search, mode: 'insensitive' } }
      ]
    };
  }

  const [departments, total] = await Promise.all([
    prisma.department.findMany({
      where: { ...where, ...searchCondition },
      orderBy: { displayOrder: 'asc' },
      skip,
      take: limit,
      include: {
        staffContacts: {
          where: { status: 'published' },
          orderBy: { displayOrder: 'asc' }
        },
        socialLinks: {
          where: { status: 'published' }
        }
      }
    }),
    prisma.department.count({
      where: { ...where, ...searchCondition }
    })
  ]);

  return { departments, total };
};

const getDepartmentById = async (id) => {
  return prisma.department.findUnique({
    where: { id },
    include: {
      staffContacts: {
        where: { status: 'published' },
        orderBy: { displayOrder: 'asc' }
      },
      socialLinks: {
        where: { status: 'published' }
      }
    }
  });
};

const createDepartment = async (data) => {
  return prisma.department.create({ data });
};

const updateDepartment = async (id, data) => {
  return prisma.department.update({
    where: { id },
    data
  });
};

const archiveDepartment = async (id) => {
  return prisma.department.update({
    where: { id },
    data: { status: 'archived' }
  });
};

const reorderDepartments = async (order) => {
  const updates = order.map((id, index) =>
    prisma.department.update({
      where: { id },
      data: { displayOrder: index + 1 }
    })
  );
  return prisma.$transaction(updates);
};

/*
|--------------------------------------------------------------------------
| STAFF CONTACTS
|--------------------------------------------------------------------------
*/

const getStaffByDepartment = async (departmentId) => {
  return prisma.staffContact.findMany({
    where: {
      departmentId,
      status: 'published'
    },
    orderBy: { displayOrder: 'asc' }
  });
};

const createStaffContact = async (data) => {
  return prisma.staffContact.create({ data });
};

const updateStaffContact = async (id, data) => {
  return prisma.staffContact.update({
    where: { id },
    data
  });
};

const archiveStaffContact = async (id) => {
  return prisma.staffContact.update({
    where: { id },
    data: { status: 'archived' }
  });
};

/*
|--------------------------------------------------------------------------
| DEPARTMENT SOCIAL LINKS
|--------------------------------------------------------------------------
*/

const getSocialLinksByDepartment = async (departmentId) => {
  return prisma.departmentSocialLink.findMany({
    where: {
      departmentId,
      status: 'published'
    }
  });
};

const createDepartmentSocialLink = async (data) => {
  return prisma.departmentSocialLink.create({ data });
};

const archiveDepartmentSocialLink = async (id) => {
  return prisma.departmentSocialLink.update({
    where: { id },
    data: { status: 'archived' }
  });
};

/*
|--------------------------------------------------------------------------
| FORM SUBMISSIONS
|--------------------------------------------------------------------------
*/

const submitForm = async (data) => {
  return prisma.formSubmission.create({ data });
};

const getSubmissions = async ({ status, isRead, assignedTo, page = 1, limit = 20 }) => {
  const skip = (page - 1) * limit;
  const where = {};

  if (status) where.status = status;
  if (isRead !== undefined) where.isRead = isRead === 'true';
  if (assignedTo) where.assignedTo = assignedTo;

  const [submissions, total] = await Promise.all([
    prisma.formSubmission.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip,
      take: limit,
      include: {
        department: {
          select: { name: true, slug: true }
        }
      }
    }),
    prisma.formSubmission.count({ where })
  ]);

  return { submissions, total };
};

const getSubmissionById = async (id) => {
  return prisma.formSubmission.findUnique({
    where: { id },
    include: {
      department: {
        select: { name: true, slug: true }
      }
    }
  });
};

const updateSubmissionStatus = async (id, status) => {
  const data = { status };
  if (status === 'replied') {
    data.respondedAt = new Date();
  }
  return prisma.formSubmission.update({
    where: { id },
    data
  });
};

const assignSubmission = async (id, assignedTo) => {
  return prisma.formSubmission.update({
    where: { id },
    data: { assignedTo, isRead: true }
  });
};

/*
|--------------------------------------------------------------------------
| SOCIAL LINKS (Global)
|--------------------------------------------------------------------------
*/

const getSocialLinks = async () => {
  return prisma.socialLink.findMany({
    where: { status: 'published' },
    orderBy: { displayOrder: 'asc' }
  });
};

const createSocialLink = async (data) => {
  return prisma.socialLink.create({ data });
};

const updateSocialLink = async (id, data) => {
  return prisma.socialLink.update({
    where: { id },
    data
  });
};

const archiveSocialLink = async (id) => {
  return prisma.socialLink.update({
    where: { id },
    data: { status: 'archived' }
  });
};

const reorderSocialLinks = async (order) => {
  const updates = order.map((id, index) =>
    prisma.socialLink.update({
      where: { id },
      data: { displayOrder: index + 1 }
    })
  );
  return prisma.$transaction(updates);
};

/*
|--------------------------------------------------------------------------
| QUICK CONTACT CARDS
|--------------------------------------------------------------------------
*/

const getQuickContactCards = async () => {
  return prisma.quickContactCard.findMany({
    where: { status: 'published' },
    orderBy: { displayOrder: 'asc' }
  });
};

const createQuickContactCard = async (data) => {
  return prisma.quickContactCard.create({ data });
};

const updateQuickContactCard = async (id, data) => {
  return prisma.quickContactCard.update({
    where: { id },
    data
  });
};

const archiveQuickContactCard = async (id) => {
  return prisma.quickContactCard.update({
    where: { id },
    data: { status: 'archived' }
  });
};

const reorderQuickContactCards = async (order) => {
  const updates = order.map((id, index) =>
    prisma.quickContactCard.update({
      where: { id },
      data: { displayOrder: index + 1 }
    })
  );
  return prisma.$transaction(updates);
};

/*
|--------------------------------------------------------------------------
| CAMPUS ADDRESS
|--------------------------------------------------------------------------
*/

const getCampusAddress = async () => {
  return prisma.campusAddress.findFirst({
    where: { status: 'published' }
  });
};

const upsertCampusAddress = async (data) => {
  const existing = await prisma.campusAddress.findFirst();
  if (existing) {
    return prisma.campusAddress.update({
      where: { id: existing.id },
      data
    });
  }
  return prisma.campusAddress.create({ data });
};

/*
|--------------------------------------------------------------------------
| OFFICE HOURS
|--------------------------------------------------------------------------
*/

const getOfficeHours = async () => {
  return prisma.officeHour.findMany({
    where: { status: 'published' },
    orderBy: { displayOrder: 'asc' }
  });
};

const updateOfficeHour = async (id, data) => {
  return prisma.officeHour.update({
    where: { id },
    data
  });
};

module.exports = {
  getMainOffice,
  upsertMainOffice,
  getDepartments,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  archiveDepartment,
  reorderDepartments,
  getStaffByDepartment,
  createStaffContact,
  updateStaffContact,
  archiveStaffContact,
  getSocialLinksByDepartment,
  createDepartmentSocialLink,
  archiveDepartmentSocialLink,
  submitForm,
  getSubmissions,
  getSubmissionById,
  updateSubmissionStatus,
  assignSubmission,
  getSocialLinks,
  createSocialLink,
  updateSocialLink,
  archiveSocialLink,
  reorderSocialLinks,
  getQuickContactCards,
  createQuickContactCard,
  updateQuickContactCard,
  archiveQuickContactCard,
  reorderQuickContactCards,
  getCampusAddress,
  upsertCampusAddress,
  getOfficeHours,
  updateOfficeHour
};