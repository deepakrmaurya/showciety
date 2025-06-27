import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-40 pr-4 ">
      <img
        className="rounded-md"
        src={IMG_CDN_URL + posterPath}
        alt="Movie Poster"
      />
    </div>
  );
};

export default MovieCard;
