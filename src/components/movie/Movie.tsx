import { MovieObj } from "../search/Search";

const Movie = ({ movie }: { movie: MovieObj }) => {
  const { Title, Year, Poster, Error } = movie;

  return (
    <div>
      {Error ? (
        <h3>{Error}</h3>
      ) : (
        <div>
          <h1>{Title}</h1>
          <h3>{Year}</h3>
          <img src={Poster} alt={Poster} />
          <button>More Info</button>
        </div>
      )}
    </div>
  );
};

export default Movie;
