const express = require("express");

const authRoutes = require("../modules/auth/auth.routes");
const userRoutes = require("../modules/user/user.routes");

const aboutPublicRoutes = require("../modules/about/about.public.routes");
const aboutAdminRoutes = require("../modules/about/about.admin.routes");
const contactPublicRoutes = require("../modules/contact/contact.public.routes");   
const contactAdminRoutes = require("../modules/contact/contact.admin.routes");     
const footerPublicRoutes = require("../modules/footer/footer.public.routes");      
const footerAdminRoutes = require("../modules/footer/footer.admin.routes");     

// 1. Import Admissions & News/Events Routes
const admissionsPublicRoutes = require("../modules/admissions/admissions.public.routes");
const admissionsAdminRoutes = require("../modules/admissions/admissions.admin.routes");
const newsEventsPublicRoutes = require("../modules/news_events/newsEvents.public.routes");
const newsEventsAdminRoutes = require("../modules/news_events/newsEvents.admin.routes");

// faculty research routes
const facultyResearchRoutes = require("../modules/faculty_research/faculty_research.routes");

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

// ----------------------------------------------------
// Admissions Routes
// ----------------------------------------------------
// Public: GET /api/admissions/programs
router.use("/admissions", admissionsPublicRoutes);

// CMS/Admin: POST/PUT/DELETE /api/cms/admissions/...
router.use("/cms/admissions", admissionsAdminRoutes);

// ----------------------------------------------------
// News & Events Routes
// ----------------------------------------------------
// Public: GET /api/news-events/news, GET /api/news-events/events
router.use("/news-events", newsEventsPublicRoutes);

// CMS/Admin: POST/PUT/DELETE /api/cms/news-events/...
router.use("/cms/news-events", newsEventsAdminRoutes);

// Faculty Research Routes
router.use("/faculty-research", facultyResearchRoutes);
module.exports = router;