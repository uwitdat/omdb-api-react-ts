import express from 'express';

const moviesRouter = express.Router();

moviesRouter.get('/', function (req, res, next) {
  res.send('movies page')
});

export default moviesRouter;
