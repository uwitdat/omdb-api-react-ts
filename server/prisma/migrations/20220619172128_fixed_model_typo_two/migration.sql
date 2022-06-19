/*
  Warnings:

  - You are about to drop the column `likedByUserId` on the `DislikeForMovie` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[dislikedByUserId]` on the table `DislikeForMovie` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `dislikedByUserId` to the `DislikeForMovie` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "DislikeForMovie_likedByUserId_key";

-- AlterTable
ALTER TABLE "DislikeForMovie" DROP COLUMN "likedByUserId",
ADD COLUMN     "dislikedByUserId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "DislikeForMovie_dislikedByUserId_key" ON "DislikeForMovie"("dislikedByUserId");
