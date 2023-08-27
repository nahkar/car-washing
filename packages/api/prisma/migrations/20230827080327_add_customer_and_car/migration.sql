/*
  Warnings:

  - You are about to drop the column `first_nam` on the `Employee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Employee" DROP COLUMN "first_nam",
ADD COLUMN     "first_name" TEXT;

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "birthday" TEXT,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "brand" TEXT,
    "model" TEXT,
    "gneration" TEXT,
    "color" TEXT,
    "year" TEXT,
    "customer_id" TEXT NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_phone_key" ON "Customer"("phone");

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
