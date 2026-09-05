const express = require("express");

const aboutController = require("./about.controller");

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Complete About Page
|--------------------------------------------------------------------------
*/

router.get("/", aboutController.getAboutPage);

/*
|--------------------------------------------------------------------------
| Overview
|--------------------------------------------------------------------------
*/

router.get("/overview", aboutController.getAboutOverview);

/*
|--------------------------------------------------------------------------
| Institutional Information
|--------------------------------------------------------------------------
*/

router.get("/objectives", aboutController.getInstitutionalObjectives);

router.get("/focus-areas", aboutController.getStrategicFocusAreas);

router.get("/direction", aboutController.getInstitutionalDirection);

router.get("/core-values", aboutController.getCoreValues);

/*
|--------------------------------------------------------------------------
| People & Leadership
|--------------------------------------------------------------------------
*/

router.get("/people", aboutController.getPeople);

router.get("/people/:id", aboutController.getPerson);

router.get("/leadership/positions", aboutController.getLeadershipPositions);

router.get("/leadership/assignments", aboutController.getLeadershipAssignments);

router.get("/leadership/profiles", aboutController.getLeadershipProfiles);

router.get(
  "/leadership/profiles/person/:personId",
  aboutController.getLeadershipProfileByPersonId,
);

router.get("/leadership/messages", aboutController.getDirectorMessages);

router.get("/leadership/messages/:id", aboutController.getDirectorMessage);

router.get("/leadership/priorities", aboutController.getLeadershipPriorities);

/*
|--------------------------------------------------------------------------
| History
|--------------------------------------------------------------------------
*/

router.get("/history", aboutController.getInstitutionHistory);

router.get("/history/milestones", aboutController.getHistoricalMilestones);

/*
|--------------------------------------------------------------------------
| Visitors
|--------------------------------------------------------------------------
*/

router.get("/visitors/types", aboutController.getVisitorTypes);

router.get("/visitors/opportunities", aboutController.getVisitOpportunities);

/*
|--------------------------------------------------------------------------
| Media
|--------------------------------------------------------------------------
*/

router.get("/media", aboutController.getMediaAssets);

/*
|--------------------------------------------------------------------------
| Statistics
|--------------------------------------------------------------------------
*/

router.get("/statistics", aboutController.getInstitutionalStatistics);

module.exports = router;
