const aboutService = require('./about.service');

const sendSuccess = (res, data) => {
  res.status(200).json({
    success: true,
    data,
  });
};

/*
|--------------------------------------------------------------------------
| COMPLETE ABOUT PAGE
|--------------------------------------------------------------------------
*/

const getAboutPage = async (req, res, next) => {
  try {
    const data = await aboutService.getAboutPage();

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| ABOUT OVERVIEW
|--------------------------------------------------------------------------
*/

const getAboutOverview = async (req, res, next) => {
  try {
    const data = await aboutService.getAboutOverview();

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| OBJECTIVES
|--------------------------------------------------------------------------
*/

const getInstitutionalObjectives = async (req, res, next) => {
  try {
    const data = await aboutService.getInstitutionalObjectives();

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| STRATEGIC FOCUS
|--------------------------------------------------------------------------
*/

const getStrategicFocusAreas = async (req, res, next) => {
  try {
    const data = await aboutService.getStrategicFocusAreas();

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| VISION & MISSION
|--------------------------------------------------------------------------
*/

const getInstitutionalDirection = async (req, res, next) => {
  try {
    const data = await aboutService.getInstitutionalDirection();

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| CORE VALUES
|--------------------------------------------------------------------------
*/

const getCoreValues = async (req, res, next) => {
  try {
    const data = await aboutService.getCoreValues();

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| PEOPLE
|--------------------------------------------------------------------------
*/

const getPeople = async (req, res, next) => {
  try {
    const data = await aboutService.getPeople();

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const getPerson = async (req, res, next) => {
  try {
    const data = await aboutService.getPersonById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Person not found",
      });
    }

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| LEADERSHIP
|--------------------------------------------------------------------------
*/

const getLeadershipPositions = async (req, res, next) => {
  try {
    const data = await aboutService.getLeadershipPositions();

    sendSuccess(res, data);
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

const getLeadershipProfiles = async (req, res, next) => {
  try {
    const data = await aboutService.getLeadershipProfiles();

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

const getLeadershipProfileByPersonId = async (req, res, next) => {
  try {
    const data =
      await aboutService.getLeadershipProfileByPersonId(req.params.personId);

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

/*
|--------------------------------------------------------------------------
| DIRECTOR MESSAGES
|--------------------------------------------------------------------------
*/

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
    const data = await aboutService.getDirectorMessageById(req.params.id);

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

/*
|--------------------------------------------------------------------------
| LEADERSHIP PRIORITIES
|--------------------------------------------------------------------------
*/

const getLeadershipPriorities = async (req, res, next) => {
  try {
    const data = await aboutService.getLeadershipPriorities();

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| HISTORY
|--------------------------------------------------------------------------
*/

const getInstitutionHistory = async (req, res, next) => {
  try {
    const data = await aboutService.getInstitutionHistory();

    sendSuccess(res, data);
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

/*
|--------------------------------------------------------------------------
| VISITORS
|--------------------------------------------------------------------------
*/

const getVisitorTypes = async (req, res, next) => {
  try {
    const data = await aboutService.getVisitorTypes();

    sendSuccess(res, data);
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

/*
|--------------------------------------------------------------------------
| MEDIA
|--------------------------------------------------------------------------
*/

const getMediaAssets = async (req, res, next) => {
  try {
    const data = await aboutService.getMediaAssets();

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

/*
|--------------------------------------------------------------------------
| STATISTICS
|--------------------------------------------------------------------------
*/

const getInstitutionalStatistics = async (req, res, next) => {
  try {
    const data = await aboutService.getInstitutionalStatistics();

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAboutPage,
  getAboutOverview,
  getInstitutionalObjectives,
  getStrategicFocusAreas,
  getInstitutionalDirection,
  getCoreValues,
  getPeople,
  getPerson,
  getLeadershipPositions,
  getLeadershipAssignments,
  getLeadershipProfiles,
  getLeadershipProfileByPersonId,
  getDirectorMessages,
  getDirectorMessage,
  getLeadershipPriorities,
  getInstitutionHistory,
  getHistoricalMilestones,
  getVisitorTypes,
  getVisitOpportunities,
  getMediaAssets,
  getInstitutionalStatistics,
};