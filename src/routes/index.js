const express = require('express');
const authRoutes = require('../modules/auth/auth.routes');
const userRoutes = require('../modules/user/user.routes');
const aboutRoutes = require('../modules/about/about.routes');
const contactRoutes = require('../modules/contact/contact.routes');
const footerRoutes = require('../modules/footer/footer.routes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use("/about", aboutRoutes);
router.use("/contact", contactRoutes);
router.use("/footer", footerRoutes);


module.exports = router;

