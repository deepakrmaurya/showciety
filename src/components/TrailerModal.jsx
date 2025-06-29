import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowTrailer } from "../utils/movieSlice";

const TrailerModal = () => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movies.trailerVideo);
  const showTrailer = useSelector((store) => store.movies.showTrailer);

  if (!showTrailer || !trailer) return null;

  const handleClose = () => dispatch(setShowTrailer(false));

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={handleClose}
    >
      <div
        className="relative w-[90%] max-w-5xl aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-3 text-white text-3xl font-bold z-50"
        >
          &times;
        </button>
        <iframe
          className="w-full h-full rounded-xl"
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&controls=1`}
          title="Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TrailerModal;
