import React, { forwardRef, useImperativeHandle, useRef } from "react";
import lang from "../../utils/languageConstants";
import { options } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { openai } from "../../utils/openai";
import { addSearchResults } from "../../redux/gptSlice";
import { MovieType } from "../../types/App.types";

const GptSearchbar = forwardRef<HTMLInputElement>((props, ref) => {
  const searchField = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => searchField.current!);

  const dispatch = useDispatch();
  const langKey = useSelector((store: RootState) => store.reducer.config.lang);

  const searchMoviesInTmdb = async (movie: string) => {
    const url =
      "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1";
    try {
      const res = await fetch(url, options);
      const json = await res.json();
      return json;
    } catch (err) {
      console.log(err);
    }
  };

  const handleGPTSearch = async () => {
    if (searchField && searchField.current !== null) {
      console.log(searchField.current?.value);
      const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query" +
        searchField.current?.value +
        ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Animal, Don, Hi Nanna, Gabbar Singh";

      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      if (!gptResults.choices) {
        alert("No results Found!");
      }
      console.log(gptResults.choices[0].message?.content);
      const gptSuggestion = gptResults.choices[0].message.content;
      const moviesList: string[] | undefined = gptSuggestion?.split(",");
      const promisesList = moviesList?.map((movie: string) =>
        searchMoviesInTmdb(movie)
      );
      const promiseResult: MovieType[] = await Promise.all(promisesList!);

      dispatch(
        addSearchResults({
          movieNames: moviesList,
          searchResults: promiseResult,
        })
      );
    }
  };
  return (
    <div
      className="my-0 mx-auto pt-[10%] w-1/2"
      onSubmit={(e) => e.preventDefault()}
    >
      <form className="m-6  bg-black grid grid-cols-12">
        <input
          ref={searchField}
          type="text"
          placeholder={lang[langKey].searchPlaceHolder}
          className="p-4 m-4 col-span-9"
        />
        <button
          className="py-4 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGPTSearch}
        >
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
});

export default GptSearchbar;
