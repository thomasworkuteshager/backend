const aboutService = require("./about.public.service");

const sendSuccess = (res, data) => {
  res.status(200).json({
    success: true,
    data,
  });
};

// Complete About Page

const getAboutPage = async (req, res, next) => {
  try {
    const data = await aboutService.getAboutPage();

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

// About Overview

const getAboutOverview = async (req, res, next) => {
  try {
    const data = await aboutService.getAboutOverview();

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

// Institutional Objectives

const getInstitutionalObjectives = async (req, res, next) => {
  try {
    const data = await aboutService.getInstitutionalObjectives();

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

// Strategic Focus Areas

const getStrategicFocusAreas = async (req, res, next) => {
  try {
    const data = await aboutService.getStrategicFocusAreas();

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

// Institutional Direction

const getInstitutionalDirection = async (req, res, next) => {
  try {
    const data = await aboutService.getInstitutionalDirection();

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

// Core Values

const getCoreValues = async (req, res, next) => {
  try {
    const data = await aboutService.getCoreValues();

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

// Leadership

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

// Director Messages

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

// Leadership Priorities

const getLeadershipPriorities = async (req, res, next) => {
  try {
    const data = await aboutService.getLeadershipPriorities();

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

// History

const getInstitutionHistory = async (req, res, next) => {
  try {
    const data = await aboutService.getInstitutionHistory();

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

const getHistoricalMilestones = async (req, res, next) => {
  try {
    const data = await aboutService.getHistoricalMilestones();

    sendSuccess(res, data);
  } catch (error) {
    next(error);
  }
};

// Visitors

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

// Institutional Statistics

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

  getInstitutionalStatistics,
};