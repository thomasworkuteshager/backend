const express = require('express');
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const aboutRoutes = require('./about.routes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use("/about", aboutRoutes);

module.exports = router;

