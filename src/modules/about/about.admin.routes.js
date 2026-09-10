const express = require("express");

const aboutController = require("./about.admin.controller");

const router = express.Router();

// About Overview

router.post("/overview", aboutController.createAboutOverview);
router.get("/overview", aboutController.getAboutOverviews);
router.get("/overview/:id", aboutController.getAboutOverview);
router.put("/overview/:id", aboutController.updateAboutOverview);
router.delete("/overview/:id", aboutController.deleteAboutOverview);

// Institutional Information

router.post(
  "/objectives",
  aboutController.createInstitutionalObjective,
);
router.get(
  "/objectives",
  aboutController.getInstitutionalObjectives,
);
router.get(
  "/objectives/:id",
  aboutController.getInstitutionalObjective,
);
router.put(
  "/objectives/:id",
  aboutController.updateInstitutionalObjective,
);
router.delete(
  "/objectives/:id",
  aboutController.deleteInstitutionalObjective,
);

router.post(
  "/focus-areas",
  aboutController.createStrategicFocusArea,
);
router.get(
  "/focus-areas",
  aboutController.getStrategicFocusAreas,
);
router.get(
  "/focus-areas/:id",
  aboutController.getStrategicFocusArea,
);
router.put(
  "/focus-areas/:id",
  aboutController.updateStrategicFocusArea,
);
router.delete(
  "/focus-areas/:id",
  aboutController.deleteStrategicFocusArea,
);

router.post(
  "/direction",
  aboutController.createInstitutionalDirection,
);
router.get(
  "/direction",
  aboutController.getInstitutionalDirections,
);
router.get(
  "/direction/:id",
  aboutController.getInstitutionalDirection,
);
router.put(
  "/direction/:id",
  aboutController.updateInstitutionalDirection,
);
router.delete(
  "/direction/:id",
  aboutController.deleteInstitutionalDirection,
);

router.post("/core-values", aboutController.createCoreValue);
router.get("/core-values", aboutController.getCoreValues);
router.get("/core-values/:id", aboutController.getCoreValue);
router.put("/core-values/:id", aboutController.updateCoreValue);
router.delete("/core-values/:id", aboutController.deleteCoreValue);

// Leadership Positions

router.post(
  "/leadership/positions",
  aboutController.createLeadershipPosition,
);
router.get(
  "/leadership/positions",
  aboutController.getLeadershipPositions,
);
router.get(
  "/leadership/positions/:id",
  aboutController.getLeadershipPosition,
);
router.put(
  "/leadership/positions/:id",
  aboutController.updateLeadershipPosition,
);
router.delete(
  "/leadership/positions/:id",
  aboutController.deleteLeadershipPosition,
);

// Leadership Assignments

router.post(
  "/leadership/assignments",
  aboutController.createLeadershipAssignment,
);
router.get(
  "/leadership/assignments",
  aboutController.getLeadershipAssignments,
);
router.get(
  "/leadership/assignments/:id",
  aboutController.getLeadershipAssignment,
);
router.put(
  "/leadership/assignments/:id",
  aboutController.updateLeadershipAssignment,
);
router.delete(
  "/leadership/assignments/:id",
  aboutController.deleteLeadershipAssignment,
);

// Leadership Profiles

router.post(
  "/leadership/profiles",
  aboutController.createLeadershipProfile,
);
router.get(
  "/leadership/profiles",
  aboutController.getLeadershipProfiles,
);
router.get(
  "/leadership/profiles/:id",
  aboutController.getLeadershipProfile,
);
router.get(
  "/leadership/profiles/person/:personId",
  aboutController.getLeadershipProfileByPersonId,
);
router.put(
  "/leadership/profiles/:id",
  aboutController.updateLeadershipProfile,
);
router.delete(
  "/leadership/profiles/:id",
  aboutController.deleteLeadershipProfile,
);

// Director Messages

router.post(
  "/leadership/messages",
  aboutController.createDirectorMessage,
);
router.get(
  "/leadership/messages",
  aboutController.getDirectorMessages,
);
router.get(
  "/leadership/messages/:id",
  aboutController.getDirectorMessage,
);
router.put(
  "/leadership/messages/:id",
  aboutController.updateDirectorMessage,
);
router.delete(
  "/leadership/messages/:id",
  aboutController.deleteDirectorMessage,
);

// Leadership Priorities

router.post(
  "/leadership/priorities",
  aboutController.createLeadershipPriority,
);
router.get(
  "/leadership/priorities",
  aboutController.getLeadershipPriorities,
);
router.get(
  "/leadership/priorities/:id",
  aboutController.getLeadershipPriority,
);
router.put(
  "/leadership/priorities/:id",
  aboutController.updateLeadershipPriority,
);
router.delete(
  "/leadership/priorities/:id",
  aboutController.deleteLeadershipPriority,
);

// Institution History

router.post(
  "/history",
  aboutController.createInstitutionHistory,
);
router.get(
  "/history",
  aboutController.getInstitutionHistories,
);
router.get(
  "/history/:id",
  aboutController.getInstitutionHistory,
);
router.put(
  "/history/:id",
  aboutController.updateInstitutionHistory,
);
router.delete(
  "/history/:id",
  aboutController.deleteInstitutionHistory,
);

// Historical Milestones

router.post(
  "/history/milestones",
  aboutController.createHistoricalMilestone,
);
router.get(
  "/history/milestones",
  aboutController.getHistoricalMilestones,
);
router.get(
  "/history/milestones/:id",
  aboutController.getHistoricalMilestone,
);
router.put(
  "/history/milestones/:id",
  aboutController.updateHistoricalMilestone,
);
router.delete(
  "/history/milestones/:id",
  aboutController.deleteHistoricalMilestone,
);

// Visitor Types

router.post(
  "/visitors/types",
  aboutController.createVisitorType,
);
router.get(
  "/visitors/types",
  aboutController.getVisitorTypes,
);
router.get(
  "/visitors/types/:id",
  aboutController.getVisitorType,
);
router.put(
  "/visitors/types/:id",
  aboutController.updateVisitorType,
);
router.delete(
  "/visitors/types/:id",
  aboutController.deleteVisitorType,
);

// Visit Opportunities

router.post(
  "/visitors/opportunities",
  aboutController.createVisitOpportunity,
);
router.get(
  "/visitors/opportunities",
  aboutController.getVisitOpportunities,
);
router.get(
  "/visitors/opportunities/:id",
  aboutController.getVisitOpportunity,
);
router.put(
  "/visitors/opportunities/:id",
  aboutController.updateVisitOpportunity,
);
router.delete(
  "/visitors/opportunities/:id",
  aboutController.deleteVisitOpportunity,
);

// Institutional Statistics

router.post(
  "/statistics",
  aboutController.createInstitutionalStatistic,
);
router.get(
  "/statistics",
  aboutController.getInstitutionalStatistics,
);
router.get(
  "/statistics/:id",
  aboutController.getInstitutionalStatistic,
);
router.put(
  "/statistics/:id",
  aboutController.updateInstitutionalStatistic,
);
router.delete(
  "/statistics/:id",
  aboutController.deleteInstitutionalStatistic,
);

module.exports = router;