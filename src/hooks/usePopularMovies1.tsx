import { useQuery } from "react-query";
import { TOP_RATED, options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../redux/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const fetchPopularMovies = async () => {
    const data = await fetch(TOP_RATED, options);
    const json = await data.json();
    if (json?.results?.length === 0) throw new Error("No results found");
    dispatch(addPopularMovies(json.results));
    return json.results;
  };

  const { isLoading, error, isError, isFetching, data } = useQuery(
    "PopularMovies",
    fetchPopularMovies,
    {
      // cacheTime: 5000, // default 5min
      // staleTime: 30000, // default 0s,
      //refetchOnMount: true, // default true it will fetch query on every mount
      //refetchOnWindowFocus:true//default it will refetch data on every time window get focus
      //refetchInterval:false// default
      //enabled: false, reftech
      // refetchInterval: 30000,
      onSuccess: (data) => console.log("data fetched successfully : ", data),
      onError: (error) => console.log("failed to fetch data", error),
    }
  );
  console.log({ isLoading, isFetching, isError });

  if (isLoading) {
    return <h2 className="text-white font-bold bg-black">Loading....</h2>;
  }
  if (error instanceof Error) {
    return <h2>{error?.message}</h2>;
  }
};

export default usePopularMovies;
