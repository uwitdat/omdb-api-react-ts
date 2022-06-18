import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAllMovies = async (req, res) => {
  /* finds all movies, sorted by most recent createdAt */
  try {
    const allMovies = await prisma.Movie.findMany({
      orderBy: [
        {
          createdAt: 'desc',
        }
      ],
    });
    res.status(200).send({ 'success': true, 'data': allMovies });

  } catch (err) {
    res.status(500).send({ 'errorMessage': err.message });
  }
}

export const createNewMovie = async (req, res) => {
  /* creates new movie  */
  const { title, description, releaseYear, duration, rating } = req.body;

  if (rating < 1 || rating > 10) {
    return res.status(422).send({ 'success': false, "errorMessage": "Rating must be between 1-10" });
  }

  try {
    const newMovie = await prisma.Movie.create({
      data: {
        title,
        description,
        releaseYear,
        duration,
        rating
      }
    })

    res.status(201).send({ 'success': true, 'data': newMovie });

  } catch (err) {
    res.status(500).send({ 'errorMessage': err.message });
  }
}

export const editMovie = async (req, res) => {
  /* edits a movie by id */
  const data = req.body;
  const { id } = req.params;

  if (data.rating < 1 || data.rating > 10) {
    return res.status(422).send({ 'success': false, "errorMessage": "Rating must be between 1-10" });
  }

  const movieToEdit = await prisma.Movie.findUnique({
    where: {
      id: Number(id)
    },
  })

  if (!movieToEdit) {
    return res.status(404).send({ 'success': false, 'data': `movie with id: ${id} does not exist.` })
  }

  const editedMovie = await prisma.Movie.update({
    where: {
      id: movieToEdit.id,
    },
    data
  })
  return res.status(200).send({ 'success': true, 'data': editedMovie })
}

export const deleteMovie = async (req, res) => {
  const { id } = req.params;

  const movieToDelete = await prisma.Movie.findUnique({
    where: {
      id: Number(id)
    },
  })


  if (!movieToDelete) {
    return res.status(404).send({ 'success': false, 'data': `movie with id: ${id} does not exist.` })
  }

  await prisma.Movie.delete({
    where: {
      id: movieToDelete.id,
    },
  })
  return res.status(200).send({ 'success': true, 'data': `movie with id: ${id} succesfully deleted.` })
}
