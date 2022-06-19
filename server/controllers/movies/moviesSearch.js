import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export const searchMovieByTitle = async (req, res) => {
  const { title } = req.query;

  const movie = await prisma.Movie.findFirst({
    where: {
      title: {
        mode: 'insensitive',
      }
    },

  })

  if (!movie) {
    return res.status(404).send({ 'success': false, 'data': `movie with title: ${title} does not exist.` });
  }

  return res.status(200).send({ 'success': true, 'data': movie });
}