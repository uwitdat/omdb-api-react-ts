-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "releaseYear" VARCHAR(50) NOT NULL,
    "duration" VARCHAR(50) NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);
