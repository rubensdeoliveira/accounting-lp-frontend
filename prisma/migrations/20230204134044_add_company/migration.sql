/*
  Warnings:

  - You are about to drop the column `user_id` on the `Document` table. All the data in the column will be lost.
  - Made the column `email` on table `AllowedUser` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `company_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_user_id_fkey";

-- AlterTable
ALTER TABLE "AllowedUser" ALTER COLUMN "email" SET NOT NULL;

-- AlterTable
ALTER TABLE "Document" DROP COLUMN "user_id",
ADD COLUMN     "company_id" TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "company_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cnpj" TEXT,
    "ie" TEXT,
    "phone" TEXT,
    "cep" TEXT,
    "street" TEXT,
    "neighborhood" TEXT,
    "number" TEXT,
    "city" TEXT,
    "state" TEXT,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
