const express = require("express");
const controller = require("./footer.admin.controller");
const { protect } = require("../../middleware/auth.middleware");

const router = express.Router();

router.use(protect);

router.post("/navigation", controller.createNavigationLink);
router.get("/navigation", controller.getNavigationLinks);
router.put("/navigation/:id", controller.updateNavigationLink);
router.delete("/navigation/:id", controller.deleteNavigationLink);

router.post("/social-links", controller.createFooterSocialLink);
router.get("/social-links", controller.getFooterSocialLinks);
router.put("/social-links/:id", controller.updateFooterSocialLink);
router.delete("/social-links/:id", controller.deleteFooterSocialLink);

router.put("/contact-info", controller.upsertFooterContactInfo);

module.exports = router;