import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const GptSearchbar = () => {
  const langKey = useSelector((store: RootState) => store.reducer.config.lang);
  return (
    <div
      className="my-0 mx-auto pt-[10%] w-1/2"
      onSubmit={(e) => e.preventDefault()}
    >
      <form className="m-6  bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[langKey].searchPlaceHolder}
          className="p-4 m-4 col-span-9"
        />
        <button className="py-4 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">
          {lang[langKey]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
