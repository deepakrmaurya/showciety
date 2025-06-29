import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import client from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      "only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: gptQuery }],
    });
    console.log(gptResults.choices[0].message.content);
    const gptMovies = gptResults.choices[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="mx-4 w-full md:w-1/2 bg-black grid grid-cols-12 rounded-2xl"
      >
        <input
          ref={searchText}
          type="text"
          className=" p-1 m-2 md:p-4 md:m-4 bg-white col-span-9 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          onClick={handleGptSearchClick}
          className="col-span-3 md:m-4 m-2 py-3   bg-red-700 text-white rounded-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
