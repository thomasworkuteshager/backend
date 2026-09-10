const express = require("express");

const authRoutes = require("../modules/auth/auth.routes");
const userRoutes = require("../modules/user/user.routes");

const aboutPublicRoutes = require("../modules/about/about.public.routes");
const aboutAdminRoutes = require("../modules/about/about.admin.routes");

const router = express.Router();

// Authentication
router.use("/auth", authRoutes);

// Users
router.use("/users", userRoutes);

// Public About
router.use("/about", aboutPublicRoutes);

// CMS About
router.use("/cms/about", aboutAdminRoutes);

module.exports = router;