import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedMovie } from "../utils/movieSlice";
import { IMG_CDN_URL } from "../utils/constants";

const MovieModal = () => {
  const dispatch = useDispatch();
  const movie = useSelector((store) => store.movies.selectedMovie);

  if (!movie) return null;

  const handleClose = () => {
    dispatch(clearSelectedMovie());
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={handleClose}
    >
      <div
        className="bg-white w-[90%] max-w-2xl rounded-lg shadow-lg relative p-6 md:flex gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Poster */}
        <img
          src={IMG_CDN_URL + movie.poster_path}
          alt={movie.title}
          className="rounded-lg w-full md:w-1/3 object-cover"
        />

        {/* Movie Info */}
        <div className="mt-4 md:mt-0 md:w-2/3">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {movie.title}
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            {movie.overview || "No description available."}
          </p>

          {/* Additional Info */}
          <div className="text-sm text-gray-500 space-y-1">
            {movie.release_date && (
              <p>
                <span className="font-medium">Release Date:</span>{" "}
                {movie.release_date}
              </p>
            )}
            {movie.vote_average && (
              <p>
                <span className="font-medium">Rating:</span> ⭐{" "}
                {movie.vote_average}/10
              </p>
            )}
            {movie.original_language && (
              <p>
                <span className="font-medium">Language:</span>{" "}
                {movie.original_language.toUpperCase()}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
