/*
  Warnings:

  - You are about to drop the column `createdAt` on the `people` table. All the data in the column will be lost.
  - You are about to drop the column `displayName` on the `people` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `people` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `people` table. All the data in the column will be lost.
  - You are about to drop the column `middleName` on the `people` table. All the data in the column will be lost.
  - You are about to drop the column `photoMediaId` on the `people` table. All the data in the column will be lost.
  - You are about to drop the column `professionalTitle` on the `people` table. All the data in the column will be lost.
  - You are about to drop the column `profileUrl` on the `people` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `people` table. All the data in the column will be lost.
  - Added the required column `display_name` to the `people` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `people` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `people` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `people` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "people"."people" DROP CONSTRAINT "people_photoMediaId_fkey";

-- DropIndex
DROP INDEX "people"."people_photoMediaId_idx";

-- AlterTable
ALTER TABLE "content"."departments" ADD COLUMN     "school_id" UUID;

-- AlterTable
ALTER TABLE "people"."people" DROP COLUMN "createdAt",
DROP COLUMN "displayName",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "middleName",
DROP COLUMN "photoMediaId",
DROP COLUMN "professionalTitle",
DROP COLUMN "profileUrl",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "display_name" VARCHAR(255) NOT NULL,
ADD COLUMN     "first_name" VARCHAR(100) NOT NULL,
ADD COLUMN     "last_name" VARCHAR(100) NOT NULL,
ADD COLUMN     "middle_name" VARCHAR(100),
ADD COLUMN     "photo_media_id" UUID,
ADD COLUMN     "professional_title" VARCHAR(255),
ADD COLUMN     "profile_url" VARCHAR(500),
ADD COLUMN     "updated_at" TIMESTAMPTZ(6) NOT NULL;

-- CreateTable
CREATE TABLE "content"."faculty_profiles" (
    "id" UUID NOT NULL,
    "person_id" UUID NOT NULL,
    "academic_rank" VARCHAR(150),
    "educationSummary" TEXT,
    "research_interests" TEXT,
    "profile_url" VARCHAR(500),
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "faculty_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."schools" (
    "id" UUID NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "description" TEXT,
    "display_order" INTEGER NOT NULL,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "schools_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "faculty_profiles_person_id_key" ON "content"."faculty_profiles"("person_id");

-- CreateIndex
CREATE INDEX "people_photo_media_id_idx" ON "people"."people"("photo_media_id");

-- AddForeignKey
ALTER TABLE "content"."faculty_profiles" ADD CONSTRAINT "faculty_profiles_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "people"."people"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "people"."people" ADD CONSTRAINT "people_photo_media_id_fkey" FOREIGN KEY ("photo_media_id") REFERENCES "media"."media_assets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content"."departments" ADD CONSTRAINT "departments_school_id_fkey" FOREIGN KEY ("school_id") REFERENCES "content"."schools"("id") ON DELETE SET NULL ON UPDATE CASCADE;
