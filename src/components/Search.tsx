import GptSearchbar from "./GptSearchbar";
import GptMovieSuggestions from "./GptMovieSuggestions";
const Search = () => {
  return (
    <div>
      <div className="bg-black sm:bg-[url('./assets/netflix_bg.jpg')] min-h-screen flex flex-col justify-between">
        <GptSearchbar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default Search;
