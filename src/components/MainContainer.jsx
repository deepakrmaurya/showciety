import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="md:pt-0 pt-26 bg-black">
      <VideoTitle
        title={original_title}
        overview={overview}
        movie={mainMovie}
      />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
