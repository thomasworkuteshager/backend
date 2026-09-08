const express = require("express");
const footerController = require("./footer.controller");
const { protect } = require("../../middleware/auth.middleware");

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

router.get("/navigation", footerController.getNavigationLinks);
router.get("/social-links", footerController.getFooterSocialLinks);
router.get("/contact-info", footerController.getFooterContactInfo);

/*
|--------------------------------------------------------------------------
| Admin Routes (Protected)
|--------------------------------------------------------------------------
*/

// Navigation Links
router.post("/navigation", protect, footerController.createNavigationLink);
router.put("/navigation/:id", protect, footerController.updateNavigationLink);
router.delete("/navigation/:id", protect, footerController.archiveNavigationLink);
router.patch("/navigation/reorder", protect, footerController.reorderNavigationLinks);

// Footer Social Links
router.post("/social-links", protect, footerController.createFooterSocialLink);
router.put("/social-links/:id", protect, footerController.updateFooterSocialLink);
router.delete("/social-links/:id", protect, footerController.archiveFooterSocialLink);

// Footer Contact Info
router.put("/contact-info", protect, footerController.upsertFooterContactInfo);

module.exports = router;