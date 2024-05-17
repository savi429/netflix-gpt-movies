export const USER_LOGO =
  "https://occ-0-1328-1327.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};
export const NOW_PLAYING_LIST =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const POPULAR_MOVIES =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const GET_VIDEO_BY_MOVIE_ID =
  "https://api.themoviedb.org/3/movie/{movie_id}/videos";
export const TOP_RATED =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const UP_COMING_MOVIES =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
export const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?query=Animal&include_adult=false&language=en-US&page=1";
export const IMAGE_URL = "https://image.tmdb.org/t/p/w780";
export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;
export const SCREEN_TYPES = {
  APP: "APP",
  HOME: "HOME",
};
