const prisma = require("../../config/prisma");

const getNavigationLinks = async ({ groupName } = {}) => {
  const where = { status: "published" };
  if (groupName) where.groupName = groupName;
  return prisma.footerNavigationLink.findMany({
    where,
    orderBy: { displayOrder: "asc" },
  });
};

const getFooterSocialLinks = async () =>
  prisma.footerSocialLink.findMany({
    where: { status: "published" },
    orderBy: { displayOrder: "asc" },
  });

const getFooterContactInfo = async () =>
  prisma.footerContactInfo.findFirst({ where: { status: "published" } });

const getFooterData = async () => {
  const [navigation, socialLinks, contactInfo] = await Promise.all([
    getNavigationLinks(),
    getFooterSocialLinks(),
    getFooterContactInfo(),
  ]);
  return { navigation, socialLinks, contactInfo };
};

module.exports = {
  getNavigationLinks,
  getFooterSocialLinks,
  getFooterContactInfo,
  getFooterData,
};