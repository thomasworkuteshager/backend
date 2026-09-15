const express = require("express");
const controller = require("./admissions.public.controller");
const router = express.Router();

router.get("/programs", controller.getPrograms);
router.get("/programs/:slug", controller.getProgramBySlug);

module.exports = router;