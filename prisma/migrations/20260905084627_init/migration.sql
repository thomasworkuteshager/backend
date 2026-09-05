-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "auth";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "content";

-- CreateEnum
CREATE TYPE "content"."ContentStatus" AS ENUM ('draft', 'published', 'archived');

-- CreateTable
CREATE TABLE "content"."about_overview" (
    "id" UUID NOT NULL,
    "eyebrow" VARCHAR(100),
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "excellenceText" TEXT,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "about_overview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."institutional_objectives" (
    "id" UUID NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "description" TEXT,
    "displayOrder" INTEGER NOT NULL,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "institutional_objectives_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."strategic_focus_areas" (
    "id" UUID NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "description" TEXT NOT NULL,
    "icon" VARCHAR(100),
    "displayOrder" INTEGER NOT NULL,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "strategic_focus_areas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."institutional_direction" (
    "id" UUID NOT NULL,
    "vision" TEXT NOT NULL,
    "mission" TEXT NOT NULL,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "institutional_direction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."core_values" (
    "id" UUID NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "description" TEXT NOT NULL,
    "displayOrder" INTEGER NOT NULL,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "core_values_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."people" (
    "id" UUID NOT NULL,
    "firstName" VARCHAR(100) NOT NULL,
    "middleName" VARCHAR(100),
    "lastName" VARCHAR(100) NOT NULL,
    "title" VARCHAR(50),
    "displayName" VARCHAR(255) NOT NULL,
    "professionalTitle" VARCHAR(255),
    "bio" TEXT,
    "department" VARCHAR(255),
    "profileUrl" VARCHAR(500),
    "email" VARCHAR(255),
    "phone" VARCHAR(50),
    "photoMediaId" UUID,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "people_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."leadership_positions" (
    "id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "category" VARCHAR(100) NOT NULL,
    "displayOrder" INTEGER NOT NULL,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "leadership_positions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."leadership_assignments" (
    "id" UUID NOT NULL,
    "personId" UUID NOT NULL,
    "positionId" UUID NOT NULL,
    "startDate" DATE NOT NULL,
    "endDate" DATE,
    "description" TEXT,
    "displayOrder" INTEGER,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "leadership_assignments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."leadership_profiles" (
    "id" UUID NOT NULL,
    "personId" UUID NOT NULL,
    "academicRank" VARCHAR(150),
    "educationSummary" TEXT,
    "researchInterests" TEXT,
    "leadershipBio" TEXT,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "leadership_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."director_messages" (
    "id" UUID NOT NULL,
    "personId" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "message" TEXT NOT NULL,
    "publishedAt" TIMESTAMPTZ(6),
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "director_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."leadership_priorities" (
    "id" UUID NOT NULL,
    "personId" UUID NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "description" TEXT NOT NULL,
    "displayOrder" INTEGER NOT NULL,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "leadership_priorities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."institution_history" (
    "id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "introduction" TEXT NOT NULL,
    "journeyText" TEXT,
    "legacyText" TEXT,
    "futureText" TEXT,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "institution_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."historical_milestones" (
    "id" UUID NOT NULL,
    "year" SMALLINT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "imageMediaId" UUID,
    "displayOrder" INTEGER NOT NULL,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "historical_milestones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."visitor_types" (
    "id" UUID NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "description" TEXT NOT NULL,
    "icon" VARCHAR(100),
    "displayOrder" INTEGER NOT NULL,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "visitor_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."visit_opportunities" (
    "id" UUID NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "description" TEXT NOT NULL,
    "linkUrl" VARCHAR(500),
    "displayOrder" INTEGER NOT NULL,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "visit_opportunities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."media_assets" (
    "id" UUID NOT NULL,
    "fileName" VARCHAR(255) NOT NULL,
    "storageUrl" TEXT NOT NULL,
    "altText" VARCHAR(500) NOT NULL,
    "caption" TEXT,
    "mimeType" VARCHAR(100) NOT NULL,
    "width" INTEGER,
    "height" INTEGER,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "media_assets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."institutional_statistics" (
    "id" UUID NOT NULL,
    "label" VARCHAR(150) NOT NULL,
    "value" VARCHAR(50) NOT NULL,
    "description" TEXT,
    "displayOrder" INTEGER NOT NULL,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "effectiveFrom" DATE,
    "effectiveTo" DATE,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "institutional_statistics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth"."users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "institutional_objectives_displayOrder_idx" ON "content"."institutional_objectives"("displayOrder");

-- CreateIndex
CREATE INDEX "strategic_focus_areas_displayOrder_idx" ON "content"."strategic_focus_areas"("displayOrder");

-- CreateIndex
CREATE INDEX "core_values_displayOrder_idx" ON "content"."core_values"("displayOrder");

-- CreateIndex
CREATE INDEX "people_photoMediaId_idx" ON "content"."people"("photoMediaId");

-- CreateIndex
CREATE INDEX "leadership_positions_displayOrder_idx" ON "content"."leadership_positions"("displayOrder");

-- CreateIndex
CREATE INDEX "leadership_assignments_personId_idx" ON "content"."leadership_assignments"("personId");

-- CreateIndex
CREATE INDEX "leadership_assignments_positionId_idx" ON "content"."leadership_assignments"("positionId");

-- CreateIndex
CREATE INDEX "leadership_assignments_startDate_idx" ON "content"."leadership_assignments"("startDate");

-- CreateIndex
CREATE INDEX "leadership_assignments_endDate_idx" ON "content"."leadership_assignments"("endDate");

-- CreateIndex
CREATE UNIQUE INDEX "leadership_profiles_personId_key" ON "content"."leadership_profiles"("personId");

-- CreateIndex
CREATE INDEX "director_messages_personId_idx" ON "content"."director_messages"("personId");

-- CreateIndex
CREATE INDEX "director_messages_publishedAt_idx" ON "content"."director_messages"("publishedAt");

-- CreateIndex
CREATE INDEX "leadership_priorities_personId_idx" ON "content"."leadership_priorities"("personId");

-- CreateIndex
CREATE INDEX "leadership_priorities_displayOrder_idx" ON "content"."leadership_priorities"("displayOrder");

-- CreateIndex
CREATE INDEX "historical_milestones_year_idx" ON "content"."historical_milestones"("year");

-- CreateIndex
CREATE INDEX "historical_milestones_displayOrder_idx" ON "content"."historical_milestones"("displayOrder");

-- CreateIndex
CREATE INDEX "historical_milestones_imageMediaId_idx" ON "content"."historical_milestones"("imageMediaId");

-- CreateIndex
CREATE INDEX "visitor_types_displayOrder_idx" ON "content"."visitor_types"("displayOrder");

-- CreateIndex
CREATE INDEX "visit_opportunities_displayOrder_idx" ON "content"."visit_opportunities"("displayOrder");

-- CreateIndex
CREATE INDEX "institutional_statistics_displayOrder_idx" ON "content"."institutional_statistics"("displayOrder");

-- CreateIndex
CREATE INDEX "institutional_statistics_effectiveFrom_idx" ON "content"."institutional_statistics"("effectiveFrom");

-- CreateIndex
CREATE INDEX "institutional_statistics_effectiveTo_idx" ON "content"."institutional_statistics"("effectiveTo");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "auth"."users"("email");

-- AddForeignKey
ALTER TABLE "content"."people" ADD CONSTRAINT "people_photoMediaId_fkey" FOREIGN KEY ("photoMediaId") REFERENCES "content"."media_assets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content"."leadership_assignments" ADD CONSTRAINT "leadership_assignments_personId_fkey" FOREIGN KEY ("personId") REFERENCES "content"."people"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content"."leadership_assignments" ADD CONSTRAINT "leadership_assignments_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "content"."leadership_positions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content"."leadership_profiles" ADD CONSTRAINT "leadership_profiles_personId_fkey" FOREIGN KEY ("personId") REFERENCES "content"."people"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content"."director_messages" ADD CONSTRAINT "director_messages_personId_fkey" FOREIGN KEY ("personId") REFERENCES "content"."people"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content"."leadership_priorities" ADD CONSTRAINT "leadership_priorities_personId_fkey" FOREIGN KEY ("personId") REFERENCES "content"."people"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content"."historical_milestones" ADD CONSTRAINT "historical_milestones_imageMediaId_fkey" FOREIGN KEY ("imageMediaId") REFERENCES "content"."media_assets"("id") ON DELETE SET NULL ON UPDATE CASCADE;
