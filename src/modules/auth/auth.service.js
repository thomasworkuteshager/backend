const prisma = require('../../config/prisma');
const { hashPassword, comparePassword } = require('../../utils/password');
const { signToken } = require('../../utils/jwt');

const registerUser = async ({ name, email, password }) => {
  const exists = await prisma.user.findUnique({ where: { email } });

  if (exists) {
    const error = new Error('User already exists');
    error.statusCode = 409;
    throw error;
  }

  const hashedPassword = await hashPassword(password);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const token = signToken({ sub: user.id, email: user.email });

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    },
    token,
  };
};

const loginUser = async ({ email, password }) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    const error = new Error('Invalid email or password');
    error.statusCode = 401;
    throw error;
  }

  const isValid = await comparePassword(password, user.password);

  if (!isValid) {
    const error = new Error('Invalid email or password');
    error.statusCode = 401;
    throw error;
  }

  const token = signToken({ sub: user.id, email: user.email });

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    },
    token,
  };
};

const getCurrentUser = async (userId) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) {
    const error = new Error('User not found');
    error.statusCode = 404;
    throw error;
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
};
