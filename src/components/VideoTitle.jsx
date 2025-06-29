import React from "react";
import { PLAY_ICON, INFO_ICON } from "../utils/constants";
import MovieModal from "./MovieModal";
import { useDispatch } from "react-redux";
import { setSelectedMovie, setShowTrailer } from "../utils/movieSlice";
import TrailerModal from "./TrailerModal";

const VideoTitle = ({ title, overview, movie }) => {
  const dispatch = useDispatch();

  const handleMoreInfoClick = () => {
    dispatch(setSelectedMovie(movie));
  };

  const handlePlayClick = () => {
    // dispatch(setSelectedMovie(movie)); // Ensure movie is set
    dispatch(setShowTrailer(true)); // Trigger trailer modal
  };

  return (
    <div className="w-screen aspect-video pt-[25%] md:px-12 absolute bg-gradient-to-r pb-5 from-black">
      <div className="text-3xl md:text-6xl  font-bold pt-35 md:pt-0 text-white">
        <div className="md:bg-transparent  px-4 pb-4 pt-4 md:pt-0 -mt-3 md:-mt-0 bg-black">
          <h1 className="">{title}</h1>
          <p className="hidden md:inline-block py-6 text-lg w-1/4 text-white">
            {overview}
          </p>

          <div className="flex pt-4 md:pt-0">
            <button
              onClick={handlePlayClick}
              className="cup-2rsor-pointer bg-white text-black text-xl font-bold rounded-md md:py-2 md:px-6 py-2 px-5 flex hover:opacity-75"
            >
              <img
                className="h-5 pt-1 mt-0.5 mr-1"
                src={PLAY_ICON}
                alt="PLAY_ICON"
              />{" "}
              Play
            </button>
            <button
              onClick={handleMoreInfoClick}
              className="cursor-pointer bg-gray-700 opacity-70 hover:opacity-100 text-white text-lg rounded-md mx-4 md:py-2 md:px-6 py-2 px-5 flex "
            >
              <img
                className="h-6  mt-0.5 mr-1"
                src={INFO_ICON}
                alt="INFO_ICON"
              />
              More Info
            </button>
          </div>
        </div>
      </div>
      {/* <MovieModal /> */}
      <TrailerModal />
    </div>
  );
};

export default VideoTitle;
