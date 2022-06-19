/*
  Warnings:

  - You are about to drop the `dislikeForMovie` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "dislikeForMovie" DROP CONSTRAINT "dislikeForMovie_movieId_fkey";

-- DropTable
DROP TABLE "dislikeForMovie";

-- CreateTable
CREATE TABLE "DislikeForMovie" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "movieId" INTEGER NOT NULL,
    "likedByUserId" INTEGER NOT NULL,

    CONSTRAINT "DislikeForMovie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DislikeForMovie_likedByUserId_key" ON "DislikeForMovie"("likedByUserId");

-- AddForeignKey
ALTER TABLE "DislikeForMovie" ADD CONSTRAINT "DislikeForMovie_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
