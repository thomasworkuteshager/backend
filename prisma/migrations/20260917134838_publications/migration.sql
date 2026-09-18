-- CreateTable
CREATE TABLE "content"."publications" (
    "id" UUID NOT NULL,
    "title" VARCHAR(500) NOT NULL,
    "publication_type" VARCHAR(100),
    "venue" VARCHAR(255),
    "publication_year" SMALLINT,
    "abstract" TEXT,
    "doi" VARCHAR(255),
    "external_url" VARCHAR(500),
    "status" "content"."ContentStatus" NOT NULL DEFAULT 'draft',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "publications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content"."publication_authors" (
    "id" UUID NOT NULL,
    "publication_id" UUID NOT NULL,
    "person_id" UUID NOT NULL,
    "author_order" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "publication_authors_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "content"."publication_authors" ADD CONSTRAINT "publication_authors_publication_id_fkey" FOREIGN KEY ("publication_id") REFERENCES "content"."publications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content"."publication_authors" ADD CONSTRAINT "publication_authors_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "people"."people"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
