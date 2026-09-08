// services/about/about.admin.service.js

const prisma = require("../../config/prisma");

/*
|--------------------------------------------------------------------------
| About Overview
|--------------------------------------------------------------------------
*/

const createAboutOverview = async (data) => {
  return prisma.aboutOverview.create({
    data,
  });
};

const getAboutOverviews = async () => {
  return prisma.aboutOverview.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });
};

const getAboutOverviewById = async (id) => {
  return prisma.aboutOverview.findUnique({
    where: { id },
  });
};

const updateAboutOverview = async (id, data) => {
  return prisma.aboutOverview.update({
    where: { id },
    data,
  });
};

const deleteAboutOverview = async (id) => {
  return prisma.aboutOverview.delete({
    where: { id },
  });
};

/*
|--------------------------------------------------------------------------
| Institutional Objectives
|--------------------------------------------------------------------------
*/

const createInstitutionalObjective = async (data) => {
  return prisma.institutionalObjective.create({
    data,
  });
};

const getInstitutionalObjectives = async () => {
  return prisma.institutionalObjective.findMany({
    orderBy: {
      displayOrder: "asc",
    },
  });
};

const getInstitutionalObjectiveById = async (id) => {
  return prisma.institutionalObjective.findUnique({
    where: { id },
  });
};

const updateInstitutionalObjective = async (id, data) => {
  return prisma.institutionalObjective.update({
    where: { id },
    data,
  });
};

const deleteInstitutionalObjective = async (id) => {
  return prisma.institutionalObjective.delete({
    where: { id },
  });
};

/*
|--------------------------------------------------------------------------
| Strategic Focus Areas
|--------------------------------------------------------------------------
*/

const createStrategicFocusArea = async (data) => {
  return prisma.strategicFocusArea.create({
    data,
  });
};

const getStrategicFocusAreas = async () => {
  return prisma.strategicFocusArea.findMany({
    orderBy: {
      displayOrder: "asc",
    },
  });
};

const getStrategicFocusAreaById = async (id) => {
  return prisma.strategicFocusArea.findUnique({
    where: { id },
  });
};

const updateStrategicFocusArea = async (id, data) => {
  return prisma.strategicFocusArea.update({
    where: { id },
    data,
  });
};

const deleteStrategicFocusArea = async (id) => {
  return prisma.strategicFocusArea.delete({
    where: { id },
  });
};

/*
|--------------------------------------------------------------------------
| Institutional Direction
|--------------------------------------------------------------------------
*/

const createInstitutionalDirection = async (data) => {
  return prisma.institutionalDirection.create({
    data,
  });
};

const getInstitutionalDirections = async () => {
  return prisma.institutionalDirection.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });
};

const getInstitutionalDirectionById = async (id) => {
  return prisma.institutionalDirection.findUnique({
    where: { id },
  });
};

const updateInstitutionalDirection = async (id, data) => {
  return prisma.institutionalDirection.update({
    where: { id },
    data,
  });
};

const deleteInstitutionalDirection = async (id) => {
  return prisma.institutionalDirection.delete({
    where: { id },
  });
};

/*
|--------------------------------------------------------------------------
| Core Values
|--------------------------------------------------------------------------
*/

const createCoreValue = async (data) => {
  return prisma.coreValue.create({
    data,
  });
};

const getCoreValues = async () => {
  return prisma.coreValue.findMany({
    orderBy: {
      displayOrder: "asc",
    },
  });
};

const getCoreValueById = async (id) => {
  return prisma.coreValue.findUnique({
    where: { id },
  });
};

const updateCoreValue = async (id, data) => {
  return prisma.coreValue.update({
    where: { id },
    data,
  });
};

const deleteCoreValue = async (id) => {
  return prisma.coreValue.delete({
    where: { id },
  });
};

/*
|--------------------------------------------------------------------------
| Leadership Positions
|--------------------------------------------------------------------------
*/

const createLeadershipPosition = async (data) => {
  return prisma.leadershipPosition.create({
    data,
  });
};

const getLeadershipPositions = async () => {
  return prisma.leadershipPosition.findMany({
    orderBy: {
      displayOrder: "asc",
    },
  });
};

const getLeadershipPositionById = async (id) => {
  return prisma.leadershipPosition.findUnique({
    where: { id },
  });
};

const updateLeadershipPosition = async (id, data) => {
  return prisma.leadershipPosition.update({
    where: { id },
    data,
  });
};

const deleteLeadershipPosition = async (id) => {
  return prisma.leadershipPosition.delete({
    where: { id },
  });
};

/*
|--------------------------------------------------------------------------
| Leadership Assignments
|--------------------------------------------------------------------------
*/

const createLeadershipAssignment = async (data) => {
  return prisma.leadershipAssignment.create({
    data,
  });
};

const getLeadershipAssignments = async () => {
  return prisma.leadershipAssignment.findMany({
    orderBy: [
      {
        displayOrder: "asc",
      },
      {
        startDate: "desc",
      },
    ],
    include: {
      person: true,
      position: true,
    },
  });
};

const getLeadershipAssignmentById = async (id) => {
  return prisma.leadershipAssignment.findUnique({
    where: { id },
    include: {
      person: true,
      position: true,
    },
  });
};

const updateLeadershipAssignment = async (id, data) => {
  return prisma.leadershipAssignment.update({
    where: { id },
    data,
    include: {
      person: true,
      position: true,
    },
  });
};

const deleteLeadershipAssignment = async (id) => {
  return prisma.leadershipAssignment.delete({
    where: { id },
  });
};

/*
|--------------------------------------------------------------------------
| Leadership Profiles
|--------------------------------------------------------------------------
*/

const createLeadershipProfile = async (data) => {
  return prisma.leadershipProfile.create({
    data,
    include: {
      person: true,
    },
  });
};

const getLeadershipProfiles = async () => {
  return prisma.leadershipProfile.findMany({
    orderBy: {
      updatedAt: "desc",
    },
    include: {
      person: true,
    },
  });
};

const getLeadershipProfileById = async (id) => {
  return prisma.leadershipProfile.findUnique({
    where: { id },
    include: {
      person: true,
    },
  });
};

const getLeadershipProfileByPersonId = async (personId) => {
  return prisma.leadershipProfile.findUnique({
    where: { personId },
    include: {
      person: true,
    },
  });
};

const updateLeadershipProfile = async (id, data) => {
  return prisma.leadershipProfile.update({
    where: { id },
    data,
    include: {
      person: true,
    },
  });
};

const deleteLeadershipProfile = async (id) => {
  return prisma.leadershipProfile.delete({
    where: { id },
  });
};

/*
|--------------------------------------------------------------------------
| Director Messages
|--------------------------------------------------------------------------
*/

const createDirectorMessage = async (data) => {
  return prisma.directorMessage.create({
    data,
    include: {
      person: true,
    },
  });
};

const getDirectorMessages = async () => {
  return prisma.directorMessage.findMany({
    orderBy: {
      publishedAt: "desc",
    },
    include: {
      person: true,
    },
  });
};

const getDirectorMessageById = async (id) => {
  return prisma.directorMessage.findUnique({
    where: { id },
    include: {
      person: true,
    },
  });
};

const updateDirectorMessage = async (id, data) => {
  return prisma.directorMessage.update({
    where: { id },
    data,
    include: {
      person: true,
    },
  });
};

const deleteDirectorMessage = async (id) => {
  return prisma.directorMessage.delete({
    where: { id },
  });
};

/*
|--------------------------------------------------------------------------
| Leadership Priorities
|--------------------------------------------------------------------------
*/

const createLeadershipPriority = async (data) => {
  return prisma.leadershipPriority.create({
    data,
    include: {
      person: true,
    },
  });
};

const getLeadershipPriorities = async () => {
  return prisma.leadershipPriority.findMany({
    orderBy: {
      displayOrder: "asc",
    },
    include: {
      person: true,
    },
  });
};

const getLeadershipPriorityById = async (id) => {
  return prisma.leadershipPriority.findUnique({
    where: { id },
    include: {
      person: true,
    },
  });
};

const updateLeadershipPriority = async (id, data) => {
  return prisma.leadershipPriority.update({
    where: { id },
    data,
    include: {
      person: true,
    },
  });
};

const deleteLeadershipPriority = async (id) => {
  return prisma.leadershipPriority.delete({
    where: { id },
  });
};

/*
|--------------------------------------------------------------------------
| Institution History
|--------------------------------------------------------------------------
*/

const createInstitutionHistory = async (data) => {
  return prisma.institutionHistory.create({
    data,
  });
};

const getInstitutionHistories = async () => {
  return prisma.institutionHistory.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });
};

const getInstitutionHistoryById = async (id) => {
  return prisma.institutionHistory.findUnique({
    where: { id },
  });
};

const updateInstitutionHistory = async (id, data) => {
  return prisma.institutionHistory.update({
    where: { id },
    data,
  });
};

const deleteInstitutionHistory = async (id) => {
  return prisma.institutionHistory.delete({
    where: { id },
  });
};

/*
|--------------------------------------------------------------------------
| Historical Milestones
|--------------------------------------------------------------------------
*/

const createHistoricalMilestone = async (data) => {
  return prisma.historicalMilestone.create({
    data,
    include: {
      imageMedia: true,
    },
  });
};

const getHistoricalMilestones = async () => {
  return prisma.historicalMilestone.findMany({
    orderBy: [
      {
        year: "asc",
      },
      {
        displayOrder: "asc",
      },
    ],
    include: {
      imageMedia: true,
    },
  });
};

const getHistoricalMilestoneById = async (id) => {
  return prisma.historicalMilestone.findUnique({
    where: { id },
    include: {
      imageMedia: true,
    },
  });
};

const updateHistoricalMilestone = async (id, data) => {
  return prisma.historicalMilestone.update({
    where: { id },
    data,
    include: {
      imageMedia: true,
    },
  });
};

const deleteHistoricalMilestone = async (id) => {
  return prisma.historicalMilestone.delete({
    where: { id },
  });
};

/*
|--------------------------------------------------------------------------
| Visitor Types
|--------------------------------------------------------------------------
*/

const createVisitorType = async (data) => {
  return prisma.visitorType.create({
    data,
  });
};

const getVisitorTypes = async () => {
  return prisma.visitorType.findMany({
    orderBy: {
      displayOrder: "asc",
    },
  });
};

const getVisitorTypeById = async (id) => {
  return prisma.visitorType.findUnique({
    where: { id },
  });
};

const updateVisitorType = async (id, data) => {
  return prisma.visitorType.update({
    where: { id },
    data,
  });
};

const deleteVisitorType = async (id) => {
  return prisma.visitorType.delete({
    where: { id },
  });
};

/*
|--------------------------------------------------------------------------
| Visit Opportunities
|--------------------------------------------------------------------------
*/

const createVisitOpportunity = async (data) => {
  return prisma.visitOpportunity.create({
    data,
  });
};

const getVisitOpportunities = async () => {
  return prisma.visitOpportunity.findMany({
    orderBy: {
      displayOrder: "asc",
    },
  });
};

const getVisitOpportunityById = async (id) => {
  return prisma.visitOpportunity.findUnique({
    where: { id },
  });
};

const updateVisitOpportunity = async (id, data) => {
  return prisma.visitOpportunity.update({
    where: { id },
    data,
  });
};

const deleteVisitOpportunity = async (id) => {
  return prisma.visitOpportunity.delete({
    where: { id },
  });
};

/*
|--------------------------------------------------------------------------
| Institutional Statistics
|--------------------------------------------------------------------------
*/

const createInstitutionalStatistic = async (data) => {
  return prisma.institutionalStatistic.create({
    data,
  });
};

const getInstitutionalStatistics = async () => {
  return prisma.institutionalStatistic.findMany({
    orderBy: {
      displayOrder: "asc",
    },
  });
};

const getInstitutionalStatisticById = async (id) => {
  return prisma.institutionalStatistic.findUnique({
    where: { id },
  });
};

const updateInstitutionalStatistic = async (id, data) => {
  return prisma.institutionalStatistic.update({
    where: { id },
    data,
  });
};

const deleteInstitutionalStatistic = async (id) => {
  return prisma.institutionalStatistic.delete({
    where: { id },
  });
};

/*
|--------------------------------------------------------------------------
| Export
|--------------------------------------------------------------------------
*/

module.exports = {
  // About Overview
  createAboutOverview,
  getAboutOverviews,
  getAboutOverviewById,
  updateAboutOverview,
  deleteAboutOverview,

  // Institutional Objectives
  createInstitutionalObjective,
  getInstitutionalObjectives,
  getInstitutionalObjectiveById,
  updateInstitutionalObjective,
  deleteInstitutionalObjective,

  // Strategic Focus Areas
  createStrategicFocusArea,
  getStrategicFocusAreas,
  getStrategicFocusAreaById,
  updateStrategicFocusArea,
  deleteStrategicFocusArea,

  // Institutional Direction
  createInstitutionalDirection,
  getInstitutionalDirections,
  getInstitutionalDirectionById,
  updateInstitutionalDirection,
  deleteInstitutionalDirection,

  // Core Values
  createCoreValue,
  getCoreValues,
  getCoreValueById,
  updateCoreValue,
  deleteCoreValue,

  // Leadership Positions
  createLeadershipPosition,
  getLeadershipPositions,
  getLeadershipPositionById,
  updateLeadershipPosition,
  deleteLeadershipPosition,

  // Leadership Assignments
  createLeadershipAssignment,
  getLeadershipAssignments,
  getLeadershipAssignmentById,
  updateLeadershipAssignment,
  deleteLeadershipAssignment,

  // Leadership Profiles
  createLeadershipProfile,
  getLeadershipProfiles,
  getLeadershipProfileById,
  getLeadershipProfileByPersonId,
  updateLeadershipProfile,
  deleteLeadershipProfile,

  // Director Messages
  createDirectorMessage,
  getDirectorMessages,
  getDirectorMessageById,
  updateDirectorMessage,
  deleteDirectorMessage,

  // Leadership Priorities
  createLeadershipPriority,
  getLeadershipPriorities,
  getLeadershipPriorityById,
  updateLeadershipPriority,
  deleteLeadershipPriority,

  // Institution History
  createInstitutionHistory,
  getInstitutionHistories,
  getInstitutionHistoryById,
  updateInstitutionHistory,
  deleteInstitutionHistory,

  // Historical Milestones
  createHistoricalMilestone,
  getHistoricalMilestones,
  getHistoricalMilestoneById,
  updateHistoricalMilestone,
  deleteHistoricalMilestone,

  // Visitor Types
  createVisitorType,
  getVisitorTypes,
  getVisitorTypeById,
  updateVisitorType,
  deleteVisitorType,

  // Visit Opportunities
  createVisitOpportunity,
  getVisitOpportunities,
  getVisitOpportunityById,
  updateVisitOpportunity,
  deleteVisitOpportunity,

  // Institutional Statistics
  createInstitutionalStatistic,
  getInstitutionalStatistics,
  getInstitutionalStatisticById,
  updateInstitutionalStatistic,
  deleteInstitutionalStatistic,
};