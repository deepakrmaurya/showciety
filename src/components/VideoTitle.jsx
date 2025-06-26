import React from "react";
import { PLAY_ICON, INFO_ICON } from "../utils/constants";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[25%]  px-12 absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-white">{overview}</p>
      <div className="flex">
        <button className="cursor-pointer bg-white text-blac7 text-xl font-bold rounded-md py-2 px-8 flex hover:opacity-75">
          <img
            className="h-5 pt-1 mt-0.5 mr-1"
            src={PLAY_ICON}
            alt="PLAY_ICON"
          />{" "}
          Play
        </button>
        <button className="cursor-pointer bg-gray-700 opacity-70 hover:opacity-100 text-white text-lg rounded-md mx-4 py-2 px-8 flex">
          <img className="h-6  mt-0.5 mr-1" src={INFO_ICON} alt="INFO_ICON" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
