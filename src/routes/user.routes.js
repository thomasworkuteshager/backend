const express = require('express');
const { getUsers, getMe, updateMe } = require('../controllers/user.controller');
const { protect } = require('../middleware/auth.middleware');
const validate = require('../middleware/validate.middleware');
const { updateUserSchema } = require('../validators/user.validator');

const router = express.Router();

router.use(protect);
router.get('/', getUsers);
router.get('/me', getMe);
router.patch('/me', validate(updateUserSchema), updateMe);

module.exports = router;
