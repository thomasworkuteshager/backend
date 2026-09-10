const userService = require('./user.service');

const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    return res.status(200).json({ users });
  } catch (error) {
    return next(error);
  }
};

const getMe = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.user.id);
    return res.status(200).json({ user });
  } catch (error) {
    return next(error);
  }
};

const updateMe = async (req, res, next) => {
  try {
    const user = await userService.updateUser(req.user.id, req.body);
    return res.status(200).json({
      message: 'User updated successfully',
      user,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getUsers,
  getMe,
  updateMe,
};
