import React, { useState } from "react";
import axios from "axios";
import Movie from "../movie/Movie";
import Spinner from "../spinner/Spinner";

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
  const [prevSearch, setPrevSearch] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const handleSearchMovie = async () => {
    if (userSearch.length === 0) return;
    if (prevSearch === userSearch) return;

    setIsFetching(true);
    try {
      const { statusText, data } = await axios.get(
        `${OMDB_URI}${process.env.REACT_APP_OMDB_API_KEY}&t=${userSearch}`
      );

      if (statusText === "OK") {
        setMovie(data);
        setPrevSearch(userSearch);
        setTimeout(() => {
          setIsFetching(false);
        }, 1300);
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <h2 className="-mt-10 mb-20 text-4xl font-bold">Search Movie By Title</h2>
      {isFetching ? <Spinner /> : null}

      {movie && !isFetching && <Movie movie={movie} />}

      <div className="w-full">
        <input
          className="border border-black border-solid py-2 p-2 w-1/4"
          value={userSearch}
          placeholder="Search movies"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setUserSearch(e.currentTarget.value)
          }
        />
        <button
          className="border border-black border-solid px-4 py-2 bg-gray-800"
          onClick={handleSearchMovie}
        >
          🔎
        </button>
      </div>
    </section>
  );
};

export default Search;
