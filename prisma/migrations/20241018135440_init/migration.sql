/*
  Warnings:

  - You are about to drop the `CategoriesOnUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CategoriesOnUser" DROP CONSTRAINT "CategoriesOnUser_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "CategoriesOnUser" DROP CONSTRAINT "CategoriesOnUser_userId_fkey";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "CategoriesOnUser";

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
