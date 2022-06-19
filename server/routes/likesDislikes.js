import express from 'express';
import { likeMovie, dislikeMovie } from '../controllers/likes-dislikes/likesDislikes.js';

const likesDislikesRouter = express.Router();

likesDislikesRouter.post('/:userId/like/:movieId', likeMovie)
likesDislikesRouter.post('/:userId/dislike/:movieId', dislikeMovie)

export default likesDislikesRouter;