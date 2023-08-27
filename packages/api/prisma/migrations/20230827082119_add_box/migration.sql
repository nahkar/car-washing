-- CreateTable
CREATE TABLE "Box" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,

    CONSTRAINT "Box_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Box" ADD CONSTRAINT "Box_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
