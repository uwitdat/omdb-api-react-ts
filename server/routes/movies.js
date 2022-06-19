import express from 'express';
import { getAllMovies, createNewMovie, editMovie, deleteMovie } from '../controllers/movies/moviesCRUD.js';
import { searchMovieByTitle } from '../controllers/movies/moviesSearch.js';

const moviesRouter = express.Router();

moviesRouter.get('/all', getAllMovies);

moviesRouter.post('/new', createNewMovie);

moviesRouter.patch('/edit/:id', editMovie);

moviesRouter.delete('/delete/:id', deleteMovie);

moviesRouter.get('/search', searchMovieByTitle);

export default moviesRouter;
