const aboutService = require("./about.admin.service");

const sendSuccess = (res, data, statusCode = 200) => {
  res.status(statusCode).json({
    success: true,
    data,
  });
};

const sendCreated = (res, data) => {
  sendSuccess(res, data, 201);
};

/*
|--------------------------------------------------------------------------
| About Overview
|--------------------------------------------------------------------------
*/

const createAboutOverview = async (req, res, next) => {
  try {
    const data = await aboutService.createAboutOverview(req.body);
    sendCreated(res, data);
  } catch (error) {
    next(error);
  }
};

const getAboutOverviews = async (req, res, next) => {
  try {
    const data = await aboutService.getAboutOverviews();
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const getAboutOverview = async (req, res, next) => {
  try {
    const data = await aboutService.getAboutOverviewById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "About overview not found",
      });
    }

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const updateAboutOverview = async (req, res, next) => {
  try {
    const data = await aboutService.updateAboutOverview(
      req.params.id,
      req.body
    );

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const deleteAboutOverview = async (req, res, next) => {
  try {
    await aboutService.deleteAboutOverview(req.params.id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| Institutional Objectives
|--------------------------------------------------------------------------
*/

const createInstitutionalObjective = async (req, res, next) => {
  try {
    const data = await aboutService.createInstitutionalObjective(req.body);
    sendCreated(res, data);
  } catch (error) {
    next(error);
  }
};

const getInstitutionalObjectives = async (req, res, next) => {
  try {
    const data = await aboutService.getInstitutionalObjectives();
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const getInstitutionalObjective = async (req, res, next) => {
  try {
    const data = await aboutService.getInstitutionalObjectiveById(
      req.params.id
    );

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Institutional objective not found",
      });
    }

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const updateInstitutionalObjective = async (req, res, next) => {
  try {
    const data = await aboutService.updateInstitutionalObjective(
      req.params.id,
      req.body
    );

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const deleteInstitutionalObjective = async (req, res, next) => {
  try {
    await aboutService.deleteInstitutionalObjective(req.params.id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| Strategic Focus Areas
|--------------------------------------------------------------------------
*/

const createStrategicFocusArea = async (req, res, next) => {
  try {
    const data = await aboutService.createStrategicFocusArea(req.body);
    sendCreated(res, data);
  } catch (error) {
    next(error);
  }
};

const getStrategicFocusAreas = async (req, res, next) => {
  try {
    const data = await aboutService.getStrategicFocusAreas();
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const getStrategicFocusArea = async (req, res, next) => {
  try {
    const data = await aboutService.getStrategicFocusAreaById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Strategic focus area not found",
      });
    }

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const updateStrategicFocusArea = async (req, res, next) => {
  try {
    const data = await aboutService.updateStrategicFocusArea(
      req.params.id,
      req.body
    );

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const deleteStrategicFocusArea = async (req, res, next) => {
  try {
    await aboutService.deleteStrategicFocusArea(req.params.id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| Institutional Direction
|--------------------------------------------------------------------------
*/

const createInstitutionalDirection = async (req, res, next) => {
  try {
    const data = await aboutService.createInstitutionalDirection(req.body);
    sendCreated(res, data);
  } catch (error) {
    next(error);
  }
};

const getInstitutionalDirections = async (req, res, next) => {
  try {
    const data = await aboutService.getInstitutionalDirections();
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const getInstitutionalDirection = async (req, res, next) => {
  try {
    const data = await aboutService.getInstitutionalDirectionById(
      req.params.id
    );

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Institutional direction not found",
      });
    }

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const updateInstitutionalDirection = async (req, res, next) => {
  try {
    const data = await aboutService.updateInstitutionalDirection(
      req.params.id,
      req.body
    );

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const deleteInstitutionalDirection = async (req, res, next) => {
  try {
    await aboutService.deleteInstitutionalDirection(req.params.id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| Core Values
|--------------------------------------------------------------------------
*/

const createCoreValue = async (req, res, next) => {
  try {
    const data = await aboutService.createCoreValue(req.body);
    sendCreated(res, data);
  } catch (error) {
    next(error);
  }
};

const getCoreValues = async (req, res, next) => {
  try {
    const data = await aboutService.getCoreValues();
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const getCoreValue = async (req, res, next) => {
  try {
    const data = await aboutService.getCoreValueById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Core value not found",
      });
    }

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const updateCoreValue = async (req, res, next) => {
  try {
    const data = await aboutService.updateCoreValue(
      req.params.id,
      req.body
    );

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const deleteCoreValue = async (req, res, next) => {
  try {
    await aboutService.deleteCoreValue(req.params.id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| Leadership Positions
|--------------------------------------------------------------------------
*/

const createLeadershipPosition = async (req, res, next) => {
  try {
    const data = await aboutService.createLeadershipPosition(req.body);
    sendCreated(res, data);
  } catch (error) {
    next(error);
  }
};

const getLeadershipPositions = async (req, res, next) => {
  try {
    const data = await aboutService.getLeadershipPositions();
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const getLeadershipPosition = async (req, res, next) => {
  try {
    const data = await aboutService.getLeadershipPositionById(
      req.params.id
    );

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Leadership position not found",
      });
    }

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const updateLeadershipPosition = async (req, res, next) => {
  try {
    const data = await aboutService.updateLeadershipPosition(
      req.params.id,
      req.body
    );

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const deleteLeadershipPosition = async (req, res, next) => {
  try {
    await aboutService.deleteLeadershipPosition(req.params.id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| Leadership Assignments
|--------------------------------------------------------------------------
*/

const createLeadershipAssignment = async (req, res, next) => {
  try {
    const data = await aboutService.createLeadershipAssignment(req.body);
    sendCreated(res, data);
  } catch (error) {
    next(error);
  }
};

const getLeadershipAssignments = async (req, res, next) => {
  try {
    const data = await aboutService.getLeadershipAssignments();
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const getLeadershipAssignment = async (req, res, next) => {
  try {
    const data = await aboutService.getLeadershipAssignmentById(
      req.params.id
    );

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Leadership assignment not found",
      });
    }

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const updateLeadershipAssignment = async (req, res, next) => {
  try {
    const data = await aboutService.updateLeadershipAssignment(
      req.params.id,
      req.body
    );

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const deleteLeadershipAssignment = async (req, res, next) => {
  try {
    await aboutService.deleteLeadershipAssignment(req.params.id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| Leadership Profiles
|--------------------------------------------------------------------------
*/

const createLeadershipProfile = async (req, res, next) => {
  try {
    const data = await aboutService.createLeadershipProfile(req.body);
    sendCreated(res, data);
  } catch (error) {
    next(error);
  }
};

const getLeadershipProfiles = async (req, res, next) => {
  try {
    const data = await aboutService.getLeadershipProfiles();
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const getLeadershipProfile = async (req, res, next) => {
  try {
    const data = await aboutService.getLeadershipProfileById(
      req.params.id
    );

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Leadership profile not found",
      });
    }

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const getLeadershipProfileByPersonId = async (req, res, next) => {
  try {
    const data = await aboutService.getLeadershipProfileByPersonId(
      req.params.personId
    );

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Leadership profile not found",
      });
    }

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const updateLeadershipProfile = async (req, res, next) => {
  try {
    const data = await aboutService.updateLeadershipProfile(
      req.params.id,
      req.body
    );

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const deleteLeadershipProfile = async (req, res, next) => {
  try {
    await aboutService.deleteLeadershipProfile(req.params.id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| Director Messages
|--------------------------------------------------------------------------
*/

const createDirectorMessage = async (req, res, next) => {
  try {
    const data = await aboutService.createDirectorMessage(req.body);
    sendCreated(res, data);
  } catch (error) {
    next(error);
  }
};

const getDirectorMessages = async (req, res, next) => {
  try {
    const data = await aboutService.getDirectorMessages();
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const getDirectorMessage = async (req, res, next) => {
  try {
    const data = await aboutService.getDirectorMessageById(
      req.params.id
    );

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Director message not found",
      });
    }

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const updateDirectorMessage = async (req, res, next) => {
  try {
    const data = await aboutService.updateDirectorMessage(
      req.params.id,
      req.body
    );

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const deleteDirectorMessage = async (req, res, next) => {
  try {
    await aboutService.deleteDirectorMessage(req.params.id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| Leadership Priorities
|--------------------------------------------------------------------------
*/

const createLeadershipPriority = async (req, res, next) => {
  try {
    const data = await aboutService.createLeadershipPriority(req.body);
    sendCreated(res, data);
  } catch (error) {
    next(error);
  }
};

const getLeadershipPriorities = async (req, res, next) => {
  try {
    const data = await aboutService.getLeadershipPriorities();
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const getLeadershipPriority = async (req, res, next) => {
  try {
    const data = await aboutService.getLeadershipPriorityById(
      req.params.id
    );

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Leadership priority not found",
      });
    }

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const updateLeadershipPriority = async (req, res, next) => {
  try {
    const data = await aboutService.updateLeadershipPriority(
      req.params.id,
      req.body
    );

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const deleteLeadershipPriority = async (req, res, next) => {
  try {
    await aboutService.deleteLeadershipPriority(req.params.id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| Institution History
|--------------------------------------------------------------------------
*/

const createInstitutionHistory = async (req, res, next) => {
  try {
    const data = await aboutService.createInstitutionHistory(req.body);
    sendCreated(res, data);
  } catch (error) {
    next(error);
  }
};

const getInstitutionHistories = async (req, res, next) => {
  try {
    const data = await aboutService.getInstitutionHistories();
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const getInstitutionHistory = async (req, res, next) => {
  try {
    const data = await aboutService.getInstitutionHistoryById(
      req.params.id
    );

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Institution history not found",
      });
    }

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const updateInstitutionHistory = async (req, res, next) => {
  try {
    const data = await aboutService.updateInstitutionHistory(
      req.params.id,
      req.body
    );

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const deleteInstitutionHistory = async (req, res, next) => {
  try {
    await aboutService.deleteInstitutionHistory(req.params.id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| Historical Milestones
|--------------------------------------------------------------------------
*/

const createHistoricalMilestone = async (req, res, next) => {
  try {
    const data = await aboutService.createHistoricalMilestone(req.body);
    sendCreated(res, data);
  } catch (error) {
    next(error);
  }
};

const getHistoricalMilestones = async (req, res, next) => {
  try {
    const data = await aboutService.getHistoricalMilestones();
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const getHistoricalMilestone = async (req, res, next) => {
  try {
    const data = await aboutService.getHistoricalMilestoneById(
      req.params.id
    );

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Historical milestone not found",
      });
    }

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const updateHistoricalMilestone = async (req, res, next) => {
  try {
    const data = await aboutService.updateHistoricalMilestone(
      req.params.id,
      req.body
    );

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const deleteHistoricalMilestone = async (req, res, next) => {
  try {
    await aboutService.deleteHistoricalMilestone(req.params.id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| Visitor Types
|--------------------------------------------------------------------------
*/

const createVisitorType = async (req, res, next) => {
  try {
    const data = await aboutService.createVisitorType(req.body);
    sendCreated(res, data);
  } catch (error) {
    next(error);
  }
};

const getVisitorTypes = async (req, res, next) => {
  try {
    const data = await aboutService.getVisitorTypes();
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const getVisitorType = async (req, res, next) => {
  try {
    const data = await aboutService.getVisitorTypeById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Visitor type not found",
      });
    }

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const updateVisitorType = async (req, res, next) => {
  try {
    const data = await aboutService.updateVisitorType(
      req.params.id,
      req.body
    );

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const deleteVisitorType = async (req, res, next) => {
  try {
    await aboutService.deleteVisitorType(req.params.id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| Visit Opportunities
|--------------------------------------------------------------------------
*/

const createVisitOpportunity = async (req, res, next) => {
  try {
    const data = await aboutService.createVisitOpportunity(req.body);
    sendCreated(res, data);
  } catch (error) {
    next(error);
  }
};

const getVisitOpportunities = async (req, res, next) => {
  try {
    const data = await aboutService.getVisitOpportunities();
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const getVisitOpportunity = async (req, res, next) => {
  try {
    const data = await aboutService.getVisitOpportunityById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Visit opportunity not found",
      });
    }

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const updateVisitOpportunity = async (req, res, next) => {
  try {
    const data = await aboutService.updateVisitOpportunity(
      req.params.id,
      req.body
    );

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const deleteVisitOpportunity = async (req, res, next) => {
  try {
    await aboutService.deleteVisitOpportunity(req.params.id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| Institutional Statistics
|--------------------------------------------------------------------------
*/

const createInstitutionalStatistic = async (req, res, next) => {
  try {
    const data = await aboutService.createInstitutionalStatistic(req.body);
    sendCreated(res, data);
  } catch (error) {
    next(error);
  }
};

const getInstitutionalStatistics = async (req, res, next) => {
  try {
    const data = await aboutService.getInstitutionalStatistics();
    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const getInstitutionalStatistic = async (req, res, next) => {
  try {
    const data = await aboutService.getInstitutionalStatisticById(
      req.params.id
    );

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Institutional statistic not found",
      });
    }

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const updateInstitutionalStatistic = async (req, res, next) => {
  try {
    const data = await aboutService.updateInstitutionalStatistic(
      req.params.id,
      req.body
    );

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const deleteInstitutionalStatistic = async (req, res, next) => {
  try {
    await aboutService.deleteInstitutionalStatistic(req.params.id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| Exports
|--------------------------------------------------------------------------
*/

module.exports = {
  // About Overview
  createAboutOverview,
  getAboutOverviews,
  getAboutOverview,
  updateAboutOverview,
  deleteAboutOverview,

  // Institutional Objectives
  createInstitutionalObjective,
  getInstitutionalObjectives,
  getInstitutionalObjective,
  updateInstitutionalObjective,
  deleteInstitutionalObjective,

  // Strategic Focus Areas
  createStrategicFocusArea,
  getStrategicFocusAreas,
  getStrategicFocusArea,
  updateStrategicFocusArea,
  deleteStrategicFocusArea,

  // Institutional Direction
  createInstitutionalDirection,
  getInstitutionalDirections,
  getInstitutionalDirection,
  updateInstitutionalDirection,
  deleteInstitutionalDirection,

  // Core Values
  createCoreValue,
  getCoreValues,
  getCoreValue,
  updateCoreValue,
  deleteCoreValue,

  // Leadership Positions
  createLeadershipPosition,
  getLeadershipPositions,
  getLeadershipPosition,
  updateLeadershipPosition,
  deleteLeadershipPosition,

  // Leadership Assignments
  createLeadershipAssignment,
  getLeadershipAssignments,
  getLeadershipAssignment,
  updateLeadershipAssignment,
  deleteLeadershipAssignment,

  // Leadership Profiles
  createLeadershipProfile,
  getLeadershipProfiles,
  getLeadershipProfile,
  getLeadershipProfileByPersonId,
  updateLeadershipProfile,
  deleteLeadershipProfile,

  // Director Messages
  createDirectorMessage,
  getDirectorMessages,
  getDirectorMessage,
  updateDirectorMessage,
  deleteDirectorMessage,

  // Leadership Priorities
  createLeadershipPriority,
  getLeadershipPriorities,
  getLeadershipPriority,
  updateLeadershipPriority,
  deleteLeadershipPriority,

  // Institution History
  createInstitutionHistory,
  getInstitutionHistories,
  getInstitutionHistory,
  updateInstitutionHistory,
  deleteInstitutionHistory,

  // Historical Milestones
  createHistoricalMilestone,
  getHistoricalMilestones,
  getHistoricalMilestone,
  updateHistoricalMilestone,
  deleteHistoricalMilestone,

  // Visitor Types
  createVisitorType,
  getVisitorTypes,
  getVisitorType,
  updateVisitorType,
  deleteVisitorType,

  // Visit Opportunities
  createVisitOpportunity,
  getVisitOpportunities,
  getVisitOpportunity,
  updateVisitOpportunity,
  deleteVisitOpportunity,

  // Institutional Statistics
  createInstitutionalStatistic,
  getInstitutionalStatistics,
  getInstitutionalStatistic,
  updateInstitutionalStatistic,
  deleteInstitutionalStatistic,
};