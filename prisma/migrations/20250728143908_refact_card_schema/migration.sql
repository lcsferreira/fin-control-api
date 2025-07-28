/*
  Warnings:

  - You are about to drop the column `availableCredit` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `limit` on the `Card` table. All the data in the column will be lost.
  - Added the required column `invoiceAmount` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Card" DROP COLUMN "availableCredit",
DROP COLUMN "isActive",
DROP COLUMN "limit",
ADD COLUMN     "invoiceAmount" DOUBLE PRECISION NOT NULL;
