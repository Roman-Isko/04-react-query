import axios from "axios";
import type { Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3/search/movie";

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const { data } = await axios.get<{ results: Movie[] }>(BASE_URL, {
    params: {
      query,
      language: "en-US",
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });

  return data.results;
};

// console.log("TOKEN:", import.meta.env.VITE_TMDB_TOKEN);
