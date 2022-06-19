import express from "express";
import pkg from 'body-parser';
import cors from 'cors';
import moviesRouter from "../routes/movies.js";
import likesDislikesRouter from "../routes/likesDislikes.js";

const { json } = pkg;

const createApp = () => {
  const app = express();
  app.use(json());
  app.use(cors('*'));

  app.get("/", (req, res) => {
    res.send("Ben S Systems Assessment server");
  });

  app.use('/movies', moviesRouter);
  app.use('/likes-dislikes', likesDislikesRouter);

  return app;
}

export default createApp;