// services/about/about.public.service.js

const prisma = require("../../config/prisma");

// About Overview
const getAboutOverview = async () => {
  return prisma.aboutOverview.findFirst({
    where: {
      status: "published",
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
};

// Institutional Objectives
const getInstitutionalObjectives = async () => {
  return prisma.institutionalObjective.findMany({
    where: {
      status: "published",
    },
    orderBy: {
      displayOrder: "asc",
    },
  });
};

// Strategic Focus Areas
const getStrategicFocusAreas = async () => {
  return prisma.strategicFocusArea.findMany({
    where: {
      status: "published",
    },
    orderBy: {
      displayOrder: "asc",
    },
  });
};

// Institutional Direction
const getInstitutionalDirection = async () => {
  return prisma.institutionalDirection.findFirst({
    where: {
      status: "published",
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
};

// Core Values
const getCoreValues = async () => {
  return prisma.coreValue.findMany({
    where: {
      status: "published",
    },
    orderBy: {
      displayOrder: "asc",
    },
  });
};

// Leadership Positions
const getLeadershipPositions = async () => {
  return prisma.leadershipPosition.findMany({
    where: {
      status: "published",
    },
    orderBy: {
      displayOrder: "asc",
    },
  });
};

// Leadership Assignments
const getLeadershipAssignments = async () => {
  return prisma.leadershipAssignment.findMany({
    where: {
      status: "published",
    },
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

// Leadership Profiles
const getLeadershipProfiles = async () => {
  return prisma.leadershipProfile.findMany({
    where: {
      status: "published",
    },
    orderBy: {
      updatedAt: "desc",
    },
    include: {
      person: true,
    },
  });
};

// Leadership Profile By Person
const getLeadershipProfileByPersonId = async (personId) => {
  return prisma.leadershipProfile.findFirst({
    where: {
      personId,
      status: "published",
    },
    include: {
      person: true,
    },
  });
};

// Director Messages
const getDirectorMessages = async () => {
  return prisma.directorMessage.findMany({
    where: {
      status: "published",
    },
    orderBy: {
      publishedAt: "desc",
    },
    include: {
      person: true,
    },
  });
};

// Director Message By ID
const getDirectorMessageById = async (id) => {
  return prisma.directorMessage.findFirst({
    where: {
      id,
      status: "published",
    },
    include: {
      person: true,
    },
  });
};

// Leadership Priorities
const getLeadershipPriorities = async () => {
  return prisma.leadershipPriority.findMany({
    where: {
      status: "published",
    },
    orderBy: {
      displayOrder: "asc",
    },
    include: {
      person: true,
    },
  });
};

// Institution History
const getInstitutionHistory = async () => {
  return prisma.institutionHistory.findFirst({
    where: {
      status: "published",
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
};

// Historical Milestones
const getHistoricalMilestones = async () => {
  return prisma.historicalMilestone.findMany({
    where: {
      status: "published",
    },
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

// Visitor Types
const getVisitorTypes = async () => {
  return prisma.visitorType.findMany({
    where: {
      status: "published",
    },
    orderBy: {
      displayOrder: "asc",
    },
  });
};

// Visit Opportunities
const getVisitOpportunities = async () => {
  return prisma.visitOpportunity.findMany({
    where: {
      status: "published",
    },
    orderBy: {
      displayOrder: "asc",
    },
  });
};

// Institutional Statistics
const getInstitutionalStatistics = async () => {
  return prisma.institutionalStatistic.findMany({
    where: {
      status: "published",
    },
    orderBy: {
      displayOrder: "asc",
    },
  });
};

// Complete Public About Page
const getAboutPage = async () => {
  const [
    overview,
    objectives,
    focusAreas,
    direction,
    coreValues,
    leadershipPositions,
    leadershipAssignments,
    leadershipProfiles,
    directorMessages,
    leadershipPriorities,
    history,
    milestones,
    visitorTypes,
    visitOpportunities,
    statistics,
  ] = await Promise.all([
    getAboutOverview(),
    getInstitutionalObjectives(),
    getStrategicFocusAreas(),
    getInstitutionalDirection(),
    getCoreValues(),
    getLeadershipPositions(),
    getLeadershipAssignments(),
    getLeadershipProfiles(),
    getDirectorMessages(),
    getLeadershipPriorities(),
    getInstitutionHistory(),
    getHistoricalMilestones(),
    getVisitorTypes(),
    getVisitOpportunities(),
    getInstitutionalStatistics(),
  ]);

  return {
    overview,
    objectives,
    focusAreas,
    direction,
    coreValues,

    leadership: {
      positions: leadershipPositions,
      assignments: leadershipAssignments,
      profiles: leadershipProfiles,
      messages: directorMessages,
      priorities: leadershipPriorities,
    },

    history: {
      overview: history,
      milestones,
    },

    visitors: {
      types: visitorTypes,
      opportunities: visitOpportunities,
    },

    statistics,
  };
};

module.exports = {
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
  getDirectorMessageById,
  getLeadershipPriorities,

  getInstitutionHistory,
  getHistoricalMilestones,

  getVisitorTypes,
  getVisitOpportunities,

  getInstitutionalStatistics,

  getAboutPage,
};