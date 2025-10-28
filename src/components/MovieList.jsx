import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="mt-5 pl-5 md:pl-10 pb-4">
      <h1 className="text-3xl text-white font-bold py-2">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-custom pb-1">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
