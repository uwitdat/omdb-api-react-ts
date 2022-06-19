-- CreateTable
CREATE TABLE "LikeForMovie" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "movieId" INTEGER NOT NULL,
    "likedByUserId" INTEGER NOT NULL,

    CONSTRAINT "LikeForMovie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dislikeForMovie" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "movieId" INTEGER NOT NULL,
    "likedByUserId" INTEGER NOT NULL,

    CONSTRAINT "dislikeForMovie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LikeForMovie_likedByUserId_key" ON "LikeForMovie"("likedByUserId");

-- CreateIndex
CREATE UNIQUE INDEX "dislikeForMovie_likedByUserId_key" ON "dislikeForMovie"("likedByUserId");

-- AddForeignKey
ALTER TABLE "LikeForMovie" ADD CONSTRAINT "LikeForMovie_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dislikeForMovie" ADD CONSTRAINT "dislikeForMovie_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
