-- CreateTable
CREATE TABLE "content"."faculty_research_overview" (
    "id" UUID NOT NULL,
    "eyebrow" VARCHAR(100),
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "faculty_research_overview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."research_areas" (
    "id" UUID NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "description" TEXT,
    "icon" VARCHAR(100),
    "display_order" INTEGER NOT NULL,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "research_areas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."research_labs_centers" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "description" TEXT NOT NULL,
    "department_id" UUID,
    "lead_person_id" UUID,
    "website_url" VARCHAR(500),
    "display_order" INTEGER NOT NULL,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "research_labs_centers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."research_projects" (
    "id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "summary" TEXT NOT NULL,
    "description" TEXT,
    "research_area_id" UUID,
    "lab_center_id" UUID,
    "start_date" DATE,
    "end_date" DATE,
    "external_url" VARCHAR(500),
    "displayOrder" INTEGER,
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "research_projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."project_members" (
    "id" UUID NOT NULL,
    "project_id" UUID NOT NULL,
    "person_id" UUID NOT NULL,
    "role" VARCHAR(150),
    "display_order" INTEGER,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "project_members_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "content"."research_labs_centers" ADD CONSTRAINT "research_labs_centers_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "content"."departments"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content"."research_labs_centers" ADD CONSTRAINT "research_labs_centers_lead_person_id_fkey" FOREIGN KEY ("lead_person_id") REFERENCES "people"."people"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content"."research_projects" ADD CONSTRAINT "research_projects_research_area_id_fkey" FOREIGN KEY ("research_area_id") REFERENCES "content"."research_areas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content"."research_projects" ADD CONSTRAINT "research_projects_lab_center_id_fkey" FOREIGN KEY ("lab_center_id") REFERENCES "content"."research_labs_centers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content"."project_members" ADD CONSTRAINT "project_members_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "content"."research_projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content"."project_members" ADD CONSTRAINT "project_members_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "people"."people"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
