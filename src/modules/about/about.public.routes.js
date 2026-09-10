const express = require("express");

const aboutController = require("./about.public.controller");

const router = express.Router();

// Complete About Page

router.get("/", aboutController.getAboutPage);

// About Overview

router.get("/overview", aboutController.getAboutOverview);

// Institutional Information

router.get("/objectives", aboutController.getInstitutionalObjectives);
router.get("/focus-areas", aboutController.getStrategicFocusAreas);
router.get("/direction", aboutController.getInstitutionalDirection);
router.get("/core-values", aboutController.getCoreValues);

// Leadership

router.get("/leadership/positions", aboutController.getLeadershipPositions);
router.get(
  "/leadership/assignments",
  aboutController.getLeadershipAssignments,
);
router.get("/leadership/profiles", aboutController.getLeadershipProfiles);
router.get(
  "/leadership/profiles/person/:personId",
  aboutController.getLeadershipProfileByPersonId,
);

router.get("/leadership/messages", aboutController.getDirectorMessages);
router.get("/leadership/messages/:id", aboutController.getDirectorMessage);

router.get(
  "/leadership/priorities",
  aboutController.getLeadershipPriorities,
);

// History

router.get("/history", aboutController.getInstitutionHistory);
router.get(
  "/history/milestones",
  aboutController.getHistoricalMilestones,
);

// Visitors

router.get("/visitors/types", aboutController.getVisitorTypes);
router.get(
  "/visitors/opportunities",
  aboutController.getVisitOpportunities,
);

// Statistics

router.get(
  "/statistics",
  aboutController.getInstitutionalStatistics,
);

module.exports = router;