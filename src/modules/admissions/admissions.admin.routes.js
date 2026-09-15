const express = require("express");
const controller = require("./admissions.admin.controller");
const router = express.Router();

router.post("/programs", controller.createProgram);
router.get("/programs", controller.getPrograms);
router.put("/programs/:id", controller.updateProgram);
router.delete("/programs/:id", controller.deleteProgram);

router.post("/deadlines", controller.createDeadline);
router.delete("/deadlines/:id", controller.deleteDeadline);

module.exports = router;