import React, { useState } from "react";
import axios from "axios";
import Movie from "../movie/Movie";

const OMDB_URI = "http://www.omdbapi.com/?apikey=";

export interface MovieObj {
  Title: string;
  Year: string;
  Poster: string;
  Error: string;
}
const Search = () => {
  const [userSearch, setUserSearch] = useState<string>("");
  const [movie, setMovie] = useState<MovieObj | null | undefined>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const handleSearchMovie = async () => {
    if (userSearch.length === 0) return;

    setIsFetching(true);
    try {
      const { statusText, data } = await axios.get(
        `${OMDB_URI}${process.env.REACT_APP_OMDB_API_KEY}&t=${userSearch}`
      );

      if (statusText === "OK") {
        setMovie(data);
        setIsFetching(false);
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <h2>Search Movie By Title</h2>
      {isFetching ? <p>Loading...</p> : null}

      {movie && <Movie movie={movie} />}
      <input
        value={userSearch}
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          setUserSearch(e.currentTarget.value)
        }
      />
      <button onClick={handleSearchMovie}>Search</button>
    </div>
  );
};

export default Search;
