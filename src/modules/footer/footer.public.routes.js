const express = require("express");
const controller = require("./footer.public.controller");

const router = express.Router();

router.get("/", controller.getFooterData);
router.get("/navigation", controller.getNavigationLinks);
router.get("/social-links", controller.getFooterSocialLinks);
router.get("/contact-info", controller.getFooterContactInfo);

module.exports = router;