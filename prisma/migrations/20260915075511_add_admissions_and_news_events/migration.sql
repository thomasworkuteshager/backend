-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "footer";

-- CreateEnum
CREATE TYPE "content"."DegreeLevel" AS ENUM ('undergraduate', 'postgraduate', 'phd', 'diploma', 'certificate');

-- CreateEnum
CREATE TYPE "content"."FormStatus" AS ENUM ('pending', 'read', 'replied', 'archived');

-- CreateEnum
CREATE TYPE "content"."ContactCategory" AS ENUM ('student', 'visitor', 'partner', 'researcher', 'other');

-- CreateTable
CREATE TABLE "content"."admission_programs" (
    "id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "level" "content"."DegreeLevel" NOT NULL,
    "description" TEXT NOT NULL,
    "requirements" TEXT NOT NULL,
    "tuitionFee" VARCHAR(100),
    "financialAid" TEXT,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "admission_programs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."admission_deadlines" (
    "id" UUID NOT NULL,
    "programId" UUID NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "deadlineDate" TIMESTAMPTZ(6) NOT NULL,
    "academicYear" VARCHAR(50) NOT NULL,
    "description" TEXT,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "admission_deadlines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."main_office" (
    "id" UUID NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "address" TEXT NOT NULL,
    "phone" VARCHAR(50) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "workingHours" VARCHAR(200) NOT NULL,
    "latitude" DECIMAL(10,7),
    "longitude" DECIMAL(10,7),
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'published',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "main_office_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."departments" (
    "id" UUID NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "slug" VARCHAR(100) NOT NULL,
    "head" VARCHAR(200) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(50) NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'published',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "departments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."staff_contacts" (
    "id" UUID NOT NULL,
    "departmentId" UUID NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "title" VARCHAR(200),
    "email" VARCHAR(255),
    "phone" VARCHAR(50),
    "displayOrder" INTEGER NOT NULL DEFAULT 0,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'published',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "staff_contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."department_social_links" (
    "id" UUID NOT NULL,
    "departmentId" UUID NOT NULL,
    "platform" VARCHAR(50) NOT NULL,
    "url" VARCHAR(500) NOT NULL,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'published',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "department_social_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."form_submissions" (
    "id" UUID NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(50),
    "category" "content"."ContactCategory" NOT NULL DEFAULT 'student',
    "departmentId" UUID,
    "subject" VARCHAR(200) NOT NULL,
    "message" TEXT NOT NULL,
    "status" "content"."FormStatus" NOT NULL DEFAULT 'pending',
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "adminNotes" TEXT,
    "assignedTo" UUID,
    "respondedAt" TIMESTAMPTZ(6),
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "form_submissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."social_links" (
    "id" UUID NOT NULL,
    "platform" VARCHAR(50) NOT NULL,
    "url" VARCHAR(500) NOT NULL,
    "icon" VARCHAR(50) NOT NULL,
    "followers" INTEGER,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'published',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "social_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."quick_contact_cards" (
    "id" UUID NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "icon" VARCHAR(50) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(50) NOT NULL,
    "description" TEXT NOT NULL,
    "color" VARCHAR(50) NOT NULL,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'published',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "quick_contact_cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."campus_address" (
    "id" UUID NOT NULL,
    "street" VARCHAR(200) NOT NULL,
    "city" VARCHAR(100) NOT NULL,
    "country" VARCHAR(100) NOT NULL,
    "postalCode" VARCHAR(20) NOT NULL,
    "latitude" DECIMAL(10,7) NOT NULL,
    "longitude" DECIMAL(10,7) NOT NULL,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'published',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "campus_address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."office_hours" (
    "id" UUID NOT NULL,
    "day" VARCHAR(20) NOT NULL,
    "openingTime" TIME(6),
    "closingTime" TIME(6),
    "isClosed" BOOLEAN NOT NULL DEFAULT false,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'published',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "office_hours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "footer"."navigation_links" (
    "id" UUID NOT NULL,
    "groupName" VARCHAR(100) NOT NULL,
    "label" VARCHAR(200) NOT NULL,
    "path" VARCHAR(500) NOT NULL,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'published',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "navigation_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "footer"."social_links" (
    "id" UUID NOT NULL,
    "platform" VARCHAR(50) NOT NULL,
    "label" VARCHAR(50) NOT NULL,
    "url" VARCHAR(500) NOT NULL,
    "icon" VARCHAR(50) NOT NULL,
    "colorClass" VARCHAR(100) NOT NULL,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'published',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "social_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "footer"."contact_info" (
    "id" UUID NOT NULL,
    "addressLine1" TEXT NOT NULL,
    "addressLine2" TEXT,
    "city" VARCHAR(100) NOT NULL,
    "country" VARCHAR(100) NOT NULL,
    "postalBox" VARCHAR(50) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(50) NOT NULL,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'published',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "contact_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."article_categories" (
    "id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "slug" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "article_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."news_articles" (
    "id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "summary" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "coverImage" VARCHAR(500),
    "categoryId" UUID NOT NULL,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "publishedAt" TIMESTAMPTZ(6),
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "news_articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."events" (
    "id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    "startDate" TIMESTAMPTZ(6) NOT NULL,
    "endDate" TIMESTAMPTZ(6) NOT NULL,
    "coverImage" VARCHAR(500),
    "organizer" VARCHAR(200),
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "events_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."event_registrations" (
    "id" UUID NOT NULL,
    "eventId" UUID NOT NULL,
    "fullName" VARCHAR(200) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(50),
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "event_registrations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admission_programs_slug_key" ON "content"."admission_programs"("slug");

-- CreateIndex
CREATE INDEX "admission_deadlines_programId_idx" ON "content"."admission_deadlines"("programId");

-- CreateIndex
CREATE INDEX "admission_deadlines_deadlineDate_idx" ON "content"."admission_deadlines"("deadlineDate");

-- CreateIndex
CREATE UNIQUE INDEX "departments_slug_key" ON "content"."departments"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "department_social_links_departmentId_platform_key" ON "content"."department_social_links"("departmentId", "platform");

-- CreateIndex
CREATE UNIQUE INDEX "social_links_platform_key" ON "content"."social_links"("platform");

-- CreateIndex
CREATE UNIQUE INDEX "social_links_platform_key" ON "footer"."social_links"("platform");

-- CreateIndex
CREATE UNIQUE INDEX "article_categories_name_key" ON "content"."article_categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "article_categories_slug_key" ON "content"."article_categories"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "news_articles_slug_key" ON "content"."news_articles"("slug");

-- CreateIndex
CREATE INDEX "news_articles_categoryId_idx" ON "content"."news_articles"("categoryId");

-- CreateIndex
CREATE INDEX "news_articles_publishedAt_idx" ON "content"."news_articles"("publishedAt");

-- CreateIndex
CREATE UNIQUE INDEX "events_slug_key" ON "content"."events"("slug");

-- CreateIndex
CREATE INDEX "events_startDate_idx" ON "content"."events"("startDate");

-- CreateIndex
CREATE INDEX "event_registrations_eventId_idx" ON "content"."event_registrations"("eventId");

-- AddForeignKey
ALTER TABLE "content"."admission_deadlines" ADD CONSTRAINT "admission_deadlines_programId_fkey" FOREIGN KEY ("programId") REFERENCES "content"."admission_programs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content"."staff_contacts" ADD CONSTRAINT "staff_contacts_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "content"."departments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content"."department_social_links" ADD CONSTRAINT "department_social_links_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "content"."departments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content"."form_submissions" ADD CONSTRAINT "form_submissions_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "content"."departments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content"."news_articles" ADD CONSTRAINT "news_articles_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "content"."article_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content"."event_registrations" ADD CONSTRAINT "event_registrations_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "content"."events"("id") ON DELETE CASCADE ON UPDATE CASCADE;
