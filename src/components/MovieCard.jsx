import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setSelectedMovie } from "../utils/movieSlice";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  // const setSelectedMovie = useSelector((store) => store.movies.selectedMovies);

  if (!movie.poster_path) return null;

  const handleClick = () => {
    dispatch(setSelectedMovie(movie));
  };
  return (
    <div className="w-40 pr-4 " onClick={handleClick}>
      <img
        className="rounded-md cursor-pointer"
        src={IMG_CDN_URL + movie.poster_path}
        alt="Movie Poster"
      />
    </div>
  );
};

export default MovieCard;
