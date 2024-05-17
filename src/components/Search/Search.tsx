import GptSearchbar from "./GptSearchbar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { useEffect, useRef } from "react";
const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current?.focus();
    }
  }, []);
  return (
    <div>
      <div className="bg-black sm:bg-[url('./assets/netflix_bg.jpg')] min-h-screen flex flex-col justify-between">
        <GptSearchbar ref={inputRef} />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default Search;
