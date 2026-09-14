const { z } = require("zod");

const navigationLinkSchema = z.object({
  groupName: z.string().max(100),
  label: z.string().max(200),
  path: z.string().max(500),
  displayOrder: z.number().int().min(0).optional(),
  status: z.enum(["draft", "published", "archived"]).optional(),
});

const footerSocialLinkSchema = z.object({
  platform: z.string(),
  label: z.string().max(50),
  url: z.string().url(),
  icon: z.string(),
  colorClass: z.string(),
  displayOrder: z.number().int().min(0).optional(),
});

const footerContactInfoSchema = z.object({
  addressLine1: z.string(),
  addressLine2: z.string().optional().nullable(),
  city: z.string().max(100),
  country: z.string().max(100),
  postalBox: z.string().max(50),
  email: z.string().email(),
  phone: z.string(),
});

module.exports = {
  navigationLinkSchema,
  footerSocialLinkSchema,
  footerContactInfoSchema,
};