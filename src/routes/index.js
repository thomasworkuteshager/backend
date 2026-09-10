const express = require("express");

const authRoutes = require("../modules/auth/auth.routes");
const userRoutes = require("../modules/user/user.routes");

const aboutPublicRoutes = require("../modules/about/about.public.routes");
const aboutAdminRoutes = require("../modules/about/about.admin.routes");
const contactPublicRoutes = require("../modules/contact/contact.public.routes");   
const contactAdminRoutes = require("../modules/contact/contact.admin.routes");     
const footerPublicRoutes = require("../modules/footer/footer.public.routes");      
const footerAdminRoutes = require("../modules/footer/footer.admin.routes");        

const router = express.Router();

// Authentication
router.use("/auth", authRoutes);

// Users
router.use("/users", userRoutes);

// Public About
router.use("/about", aboutPublicRoutes);

// CMS About
router.use("/cms/about", aboutAdminRoutes);

// Public Contact
router.use("/contact", contactPublicRoutes);          

// CMS Contact
router.use("/cms/contact", contactAdminRoutes);       

// Public Footer
router.use("/footer", footerPublicRoutes);            

// CMS Footer
router.use("/cms/footer", footerAdminRoutes);         
module.exports = router;