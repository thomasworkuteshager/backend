const prisma = require("../../config/prisma");

// Navigation
const createNavigationLink = async (data) => prisma.footerNavigationLink.create({ data });
const getNavigationLinks = async () =>
  prisma.footerNavigationLink.findMany({ orderBy: { displayOrder: "asc" } });
const updateNavigationLink = async (id, data) =>
  prisma.footerNavigationLink.update({ where: { id }, data });
const deleteNavigationLink = async (id) =>
  prisma.footerNavigationLink.delete({ where: { id } });

// Social Links
const createFooterSocialLink = async (data) => prisma.footerSocialLink.create({ data });
const getFooterSocialLinks = async () =>
  prisma.footerSocialLink.findMany({ orderBy: { displayOrder: "asc" } });
const updateFooterSocialLink = async (id, data) =>
  prisma.footerSocialLink.update({ where: { id }, data });
const deleteFooterSocialLink = async (id) =>
  prisma.footerSocialLink.delete({ where: { id } });

// Contact Info
const upsertFooterContactInfo = async (data) => {
  const existing = await prisma.footerContactInfo.findFirst();
  if (existing) {
    return prisma.footerContactInfo.update({ where: { id: existing.id }, data });
  }
  return prisma.footerContactInfo.create({ data });
};

module.exports = {
  createNavigationLink,
  getNavigationLinks,
  updateNavigationLink,
  deleteNavigationLink,
  createFooterSocialLink,
  getFooterSocialLinks,
  updateFooterSocialLink,
  deleteFooterSocialLink,
  upsertFooterContactInfo,
};