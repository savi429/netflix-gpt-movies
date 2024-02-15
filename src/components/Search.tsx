import GptSearchbar from "./GptSearchbar";

const Search = () => {
  return (
    <div>
      <div className="bg-black sm:bg-[url('./assets/netflix_bg.jpg')] min-h-screen flex flex-col justify-between">
        <GptSearchbar />
      </div>
    </div>
  );
};

export default Search;
