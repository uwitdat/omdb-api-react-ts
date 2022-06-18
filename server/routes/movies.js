import express from 'express';
import { getAllMovies, createNewMovie, editMovie, deleteMovie } from '../controllers/movies.js';

const moviesRouter = express.Router();

moviesRouter.get('/all', getAllMovies);

moviesRouter.post('/new', createNewMovie)

moviesRouter.patch('/edit/:id', editMovie)

moviesRouter.delete('/delete/:id', deleteMovie)

export default moviesRouter;
