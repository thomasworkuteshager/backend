const express = require("express");
const controller = require("./newsEvents.admin.controller");
const router = express.Router();

router.post("/categories", controller.createCategory);

router.post("/news", controller.createArticle);
router.put("/news/:id", controller.updateArticle);
router.delete("/news/:id", controller.deleteArticle);

router.post("/events", controller.createEvent);
router.delete("/events/:id", controller.deleteEvent);

module.exports = router;