const prisma = require("../../config/prisma");

/*
|--------------------------------------------------------------------------
| ABOUT OVERVIEW
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| INSTITUTIONAL OBJECTIVES
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| STRATEGIC FOCUS AREAS
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| VISION & MISSION
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| CORE VALUES
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| PEOPLE
|--------------------------------------------------------------------------
*/

const getPeople = async () => {
  return prisma.person.findMany({
    include: {
      photoMedia: true,
      leadershipProfile: true,
    },
    orderBy: {
      displayName: "asc",
    },
  });
};

const getPersonById = async (id) => {
  return prisma.person.findUnique({
    where: {
      id,
    },
    include: {
      photoMedia: true,
      leadershipProfile: true,
      leadershipAssignments: {
        include: {
          position: true,
        },
        orderBy: {
          startDate: "desc",
        },
      },
      directorMessages: {
        where: {
          status: "published",
        },
        orderBy: {
          publishedAt: "desc",
        },
      },
      leadershipPriorities: {
        where: {
          status: "published",
        },
        orderBy: {
          displayOrder: "asc",
        },
      },
    },
  });
};

/*
|--------------------------------------------------------------------------
| LEADERSHIP POSITIONS
|--------------------------------------------------------------------------
*/

const getLeadershipPositions = async () => {
  return prisma.leadershipPosition.findMany({
    where: {
      status: "published",
    },
    include: {
      assignments: {
        where: {
          status: "published",
        },
        include: {
          person: {
            include: {
              photoMedia: true,
            },
          },
        },
        orderBy: {
          displayOrder: "asc",
        },
      },
    },
    orderBy: {
      displayOrder: "asc",
    },
  });
};

/*
|--------------------------------------------------------------------------
| LEADERSHIP ASSIGNMENTS
|--------------------------------------------------------------------------
*/

const getLeadershipAssignments = async () => {
  return prisma.leadershipAssignment.findMany({
    where: {
      status: "published",
    },
    include: {
      person: {
        include: {
          photoMedia: true,
        },
      },
      position: true,
    },
    orderBy: [
      {
        displayOrder: "asc",
      },
      {
        startDate: "desc",
      },
    ],
  });
};

/*
|--------------------------------------------------------------------------
| LEADERSHIP PROFILES
|--------------------------------------------------------------------------
*/

const getLeadershipProfiles = async () => {
  return prisma.leadershipProfile.findMany({
    where: {
      status: "published",
    },
    include: {
      person: {
        include: {
          photoMedia: true,
        },
      },
    },
  });
};

const getLeadershipProfileByPersonId = async (personId) => {
  return prisma.leadershipProfile.findUnique({
    where: {
      personId,
    },
    include: {
      person: {
        include: {
          photoMedia: true,
        },
      },
    },
  });
};

/*
|--------------------------------------------------------------------------
| DIRECTOR MESSAGES
|--------------------------------------------------------------------------
*/

const getDirectorMessages = async () => {
  return prisma.directorMessage.findMany({
    where: {
      status: "published",
    },
    include: {
      person: {
        include: {
          photoMedia: true,
        },
      },
    },
    orderBy: {
      publishedAt: "desc",
    },
  });
};

const getDirectorMessageById = async (id) => {
  return prisma.directorMessage.findFirst({
    where: {
      id,
      status: "published",
    },
    include: {
      person: {
        include: {
          photoMedia: true,
        },
      },
    },
  });
};

/*
|--------------------------------------------------------------------------
| LEADERSHIP PRIORITIES
|--------------------------------------------------------------------------
*/

const getLeadershipPriorities = async () => {
  return prisma.leadershipPriority.findMany({
    where: {
      status: "published",
    },
    include: {
      person: true,
    },
    orderBy: {
      displayOrder: "asc",
    },
  });
};

/*
|--------------------------------------------------------------------------
| INSTITUTIONAL HISTORY
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| HISTORICAL MILESTONES
|--------------------------------------------------------------------------
*/

const getHistoricalMilestones = async () => {
  return prisma.historicalMilestone.findMany({
    where: {
      status: "published",
    },
    include: {
      imageMedia: true,
    },
    orderBy: [
      {
        year: "asc",
      },
      {
        displayOrder: "asc",
      },
    ],
  });
};

/*
|--------------------------------------------------------------------------
| VISITOR TYPES
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| VISIT OPPORTUNITIES
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| MEDIA ASSETS
|--------------------------------------------------------------------------
*/

const getMediaAssets = async () => {
  return prisma.mediaAsset.findMany({
    where: {
      status: "published",
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

/*
|--------------------------------------------------------------------------
| INSTITUTIONAL STATISTICS
|--------------------------------------------------------------------------
*/

const getInstitutionalStatistics = async () => {
  const today = new Date();

  return prisma.institutionalStatistic.findMany({
    where: {
      status: "published",
      AND: [
        {
          OR: [
            {
              effectiveFrom: null,
            },
            {
              effectiveFrom: {
                lte: today,
              },
            },
          ],
        },
        {
          OR: [
            {
              effectiveTo: null,
            },
            {
              effectiveTo: {
                gte: today,
              },
            },
          ],
        },
      ],
    },
    orderBy: {
      displayOrder: "asc",
    },
  });
};

/*
|--------------------------------------------------------------------------
| COMPLETE ABOUT PAGE
|--------------------------------------------------------------------------
|
| Useful for the frontend when the entire About page is needed.
|
*/

const getAboutPage = async () => {
  const [
    overview,
    objectives,
    focusAreas,
    direction,
    coreValues,
    people,
    leadershipPositions,
    leadershipAssignments,
    leadershipProfiles,
    directorMessages,
    leadershipPriorities,
    history,
    milestones,
    visitorTypes,
    visitOpportunities,
    mediaAssets,
    statistics,
  ] = await Promise.all([
    getAboutOverview(),
    getInstitutionalObjectives(),
    getStrategicFocusAreas(),
    getInstitutionalDirection(),
    getCoreValues(),
    getPeople(),
    getLeadershipPositions(),
    getLeadershipAssignments(),
    getLeadershipProfiles(),
    getDirectorMessages(),
    getLeadershipPriorities(),
    getInstitutionHistory(),
    getHistoricalMilestones(),
    getVisitorTypes(),
    getVisitOpportunities(),
    getMediaAssets(),
    getInstitutionalStatistics(),
  ]);

  return {
    overview,
    objectives,
    focusAreas,
    direction,
    coreValues,
    people,
    leadershipPositions,
    leadershipAssignments,
    leadershipProfiles,
    directorMessages,
    leadershipPriorities,
    history,
    milestones,
    visitorTypes,
    visitOpportunities,
    mediaAssets,
    statistics,
  };
};

module.exports = {
  getAboutOverview,
  getInstitutionalObjectives,
  getStrategicFocusAreas,
  getInstitutionalDirection,
  getCoreValues,
  getPeople,
  getPersonById,
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
  getMediaAssets,
  getInstitutionalStatistics,
  getAboutPage,
};