import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const likeMovie = async (req, res) => {
  const { userId, movieId } = req.params;

  checkForExistingDislike(userId, movieId);

  try {
    const newLike = await prisma.LikeForMovie.create({
      data: {
        movieId: Number(movieId),
        likedByUserId: Number(userId)
      }
    })

    res.status(201).send({ 'success': true, 'data': newLike });

  } catch (err) {
    res.status(500).send({ 'errorMessage': err.message });
  }
}

export const dislikeMovie = async (req, res) => {
  const { userId, movieId } = req.params;

  checkForExistingLike(userId, movieId);

  try {
    const newDislike = await prisma.DislikeForMovie.create({
      data: {
        movieId: Number(movieId),
        dislikedByUserId: Number(userId)
      }
    })

    res.status(201).send({ 'success': true, 'data': newDislike });

  } catch (err) {
    res.status(500).send({ 'errorMessage': err.message });
  }
}



/* ====================================================
======================= NOTES =========================
======================================================= */

/* 

Assuming a user can not both like, and dislike the same movie,
these functions check if a user already likes or dislikes a movie, 
and if so, deletes the entry.

*/

const checkForExistingDislike = async (userId, movieId) => {

  const doesUserDislikeMovie = await prisma.DislikeForMovie.findFirst({
    where: {
      movieId: Number(movieId),
      dislikedByUserId: Number(userId)
    },
  })

  if (doesUserDislikeMovie) {
    await prisma.DislikeForMovie.deleteMany({
      where: {
        movieId: Number(movieId),
        dislikedByUserId: Number(userId)
      },
    })
  }
}

const checkForExistingLike = async (userId, movieId) => {

  const doesUserLikeMovie = await prisma.LikeForMovie.findFirst({
    where: {
      movieId: Number(movieId),
      likedByUserId: Number(userId)
    },
  })

  if (doesUserLikeMovie) {
    await prisma.LikeForMovie.deleteMany({
      where: {
        movieId: Number(movieId),
        likedByUserId: Number(userId)
      },
    })
  }
}