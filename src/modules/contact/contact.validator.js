const { z } = require("zod");

const mainOfficeSchema = z.object({
  name: z.string().min(2).max(200),
  address: z.string(),
  phone: z.string(),
  email: z.string().email(),
  workingHours: z.string(),
  latitude: z.number().optional().nullable(),
  longitude: z.number().optional().nullable(),
});

const departmentSchema = z.object({
  name: z.string().min(2).max(200),
  slug: z.string().min(2).max(100),
  head: z.string().max(200),
  email: z.string().email(),
  phone: z.string(),
  location: z.string(),
  description: z.string().optional(),
  displayOrder: z.number().int().min(0).optional(),
  status: z.enum(["draft", "published", "archived"]).optional(),
});

const formSubmissionSchema = z.object({
  name: z.string().min(2).max(200),
  email: z.string().email(),
  phone: z.string().optional(),
  category: z.enum(["student", "visitor", "partner", "researcher", "other"]),
  departmentId: z.string().uuid().optional().nullable(),
  subject: z.string().min(3).max(200),
  message: z.string().min(10),
});

const socialLinkSchema = z.object({
  platform: z.string(),
  url: z.string().url(),
  icon: z.string(),
  followers: z.number().int().min(0).optional().nullable(),
  displayOrder: z.number().int().min(0).optional(),
});

const quickContactCardSchema = z.object({
  title: z.string().max(200),
  icon: z.string(),
  email: z.string().email(),
  phone: z.string(),
  description: z.string(),
  color: z.string(),
  displayOrder: z.number().int().min(0).optional(),
});

const campusAddressSchema = z.object({
  street: z.string().max(200),
  city: z.string().max(100),
  country: z.string().max(100),
  postalCode: z.string().max(20),
  latitude: z.number(),
  longitude: z.number(),
});

const officeHourSchema = z.object({
  day: z.string().max(20),
  openingTime: z.string().optional().nullable(),
  closingTime: z.string().optional().nullable(),
  isClosed: z.boolean().optional(),
  displayOrder: z.number().int().min(0).optional(),
});

module.exports = {
  mainOfficeSchema,
  departmentSchema,
  formSubmissionSchema,
  socialLinkSchema,
  quickContactCardSchema,
  campusAddressSchema,
  officeHourSchema,
};