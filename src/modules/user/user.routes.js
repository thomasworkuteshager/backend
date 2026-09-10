const express = require('express');
const { getUsers, getMe, updateMe } = require('./user.controller');
const { protect } = require('../../middleware/auth.middleware');
const validate = require('../../middleware/validate.middleware');
// const { updateUserSchema } = require('./user.validator');

const router = express.Router();

router.use(protect);
router.get('/', getUsers);
router.get('/me', getMe);
// router.patch('/me', validate(updateUserSchema), updateMe);

module.exports = router;
