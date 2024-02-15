export const USER_LOGO =
  "https://occ-0-1328-1327.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDBiZWNjODNmNTM3ZWMyZmQ3OTczM2E5ZjdkMjE3YyIsInN1YiI6IjY1Y2NlMWY0ZmJhNjI1MDE3ZDAyMGE0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IZzYHO0pp8GPdq2e_5-qKih_vrL5UGhCpyElBXGeTFk",
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

export const IMAGE_URL = "https://image.tmdb.org/t/p/w780";
export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
