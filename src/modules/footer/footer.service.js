const prisma = require("../../config/prisma");

/*
|--------------------------------------------------------------------------
| NAVIGATION LINKS
|--------------------------------------------------------------------------
*/

const getNavigationLinks = async ({ groupName, page = 1, limit = 20 }) => {
  const skip = (page - 1) * limit;
  const where = { status: 'published' };
  if (groupName) where.groupName = groupName;

  const [links, total] = await Promise.all([
    prisma.footerNavigationLink.findMany({
      where,
      orderBy: { displayOrder: 'asc' },
      skip,
      take: limit
    }),
    prisma.footerNavigationLink.count({ where })
  ]);

  return { links, total };
};

const createNavigationLink = async (data) => {
  return prisma.footerNavigationLink.create({ data });
};

const updateNavigationLink = async (id, data) => {
  return prisma.footerNavigationLink.update({
    where: { id },
    data
  });
};

const archiveNavigationLink = async (id) => {
  return prisma.footerNavigationLink.update({
    where: { id },
    data: { status: 'archived' }
  });
};

const reorderNavigationLinks = async (order) => {
  const updates = order.map((id, index) =>
    prisma.footerNavigationLink.update({
      where: { id },
      data: { displayOrder: index + 1 }
    })
  );
  return prisma.$transaction(updates);
};

/*
|--------------------------------------------------------------------------
| FOOTER SOCIAL LINKS
|--------------------------------------------------------------------------
*/

const getFooterSocialLinks = async () => {
  return prisma.footerSocialLink.findMany({
    where: { status: 'published' },
    orderBy: { displayOrder: 'asc' }
  });
};

const createFooterSocialLink = async (data) => {
  return prisma.footerSocialLink.create({ data });
};

const updateFooterSocialLink = async (id, data) => {
  return prisma.footerSocialLink.update({
    where: { id },
    data
  });
};

const archiveFooterSocialLink = async (id) => {
  return prisma.footerSocialLink.update({
    where: { id },
    data: { status: 'archived' }
  });
};

/*
|--------------------------------------------------------------------------
| FOOTER CONTACT INFO
|--------------------------------------------------------------------------
*/

const getFooterContactInfo = async () => {
  return prisma.footerContactInfo.findFirst({
    where: { status: 'published' }
  });
};

const upsertFooterContactInfo = async (data) => {
  const existing = await prisma.footerContactInfo.findFirst();
  if (existing) {
    return prisma.footerContactInfo.update({
      where: { id: existing.id },
      data
    });
  }
  return prisma.footerContactInfo.create({ data });
};

module.exports = {
  getNavigationLinks,
  createNavigationLink,
  updateNavigationLink,
  archiveNavigationLink,
  reorderNavigationLinks,
  getFooterSocialLinks,
  createFooterSocialLink,
  updateFooterSocialLink,
  archiveFooterSocialLink,
  getFooterContactInfo,
  upsertFooterContactInfo
};