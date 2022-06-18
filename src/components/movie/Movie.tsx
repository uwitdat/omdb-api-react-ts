import { MovieObj } from "../search/Search";

const Movie = ({ movie }: { movie: MovieObj }) => {
  const { Title, Year, Poster, Error } = movie;

  const handleMoreInfo = (movie: object) => console.log("More info =>", movie);

  return (
    <div>
      {Error ? (
        <h3>{Error}</h3>
      ) : (
        <div>
          <h1 className="text-3xl">{Title}</h1>
          <h3>Release Year: {Year}</h3>
          <img src={Poster} alt={Poster} />
          <button
            onClick={() => handleMoreInfo(movie)}
            className="m-6 bg-gray-800 text-white rounded px-8 py-4"
          >
            More Info
          </button>
        </div>
      )}
    </div>
  );
};

export default Movie;
