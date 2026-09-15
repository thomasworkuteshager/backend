const express = require("express");
const controller = require("./newsEvents.public.controller");
const router = express.Router();

router.get("/news", controller.getNewsArticles);
router.get("/news/:slug", controller.getArticleBySlug);
router.get("/events", controller.getEvents);
router.post("/events/register", controller.registerForEvent);

module.exports = router;