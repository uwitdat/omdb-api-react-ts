import express from "express";
import pkg from 'body-parser';
import cors from 'cors';
import moviesRouter from "../routes/movies.js";

const { json } = pkg;

const createApp = () => {
  const app = express();
  app.use(json());
  app.use(cors('*'));

  app.get("/", (req, res) => {
    res.send("Ben S Systems Assessment server");
  });

  app.use('/movies', moviesRouter);

  return app;
}

export default createApp;