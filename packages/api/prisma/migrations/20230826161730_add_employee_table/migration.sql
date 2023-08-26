/*
  Warnings:

  - The primary key for the `Company` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Company" DROP CONSTRAINT "Company_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Company_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Company_id_seq";

-- CreateTable
CREATE TABLE "Employee" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "first_nam" TEXT,
    "last_name" TEXT,
    "birthday" TEXT,
    "companyId" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_email_key" ON "Employee"("email");

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
