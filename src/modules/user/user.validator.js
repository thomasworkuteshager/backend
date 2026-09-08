const { z } = require('zod');

const updateUserSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').trim().optional(),
  email: z.string().email('Please provide a valid email').optional(),
});

module.exports = {
  updateUserSchema,
};
