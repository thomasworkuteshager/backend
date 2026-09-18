const express = require("express");

const controller = require("./faculty_research.controller");

const router = express.Router();

router.get(
  "/research-areas",
  controller.getResearchAreas
);

router.get(
  "/research-areas/:id",
  controller.getResearchAreaById
);

router.post(
  "/research-areas",
  controller.createResearchArea
);

router.put(
  "/research-areas/:id",
  controller.updateResearchArea
);

router.delete(
  "/research-areas/:id",
  controller.deleteResearchArea
);

module.exports = router;