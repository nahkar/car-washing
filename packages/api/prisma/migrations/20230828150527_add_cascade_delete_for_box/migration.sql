-- DropForeignKey
ALTER TABLE "Box" DROP CONSTRAINT "Box_company_id_fkey";

-- AddForeignKey
ALTER TABLE "Box" ADD CONSTRAINT "Box_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;
