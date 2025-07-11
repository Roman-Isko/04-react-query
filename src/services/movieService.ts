import axios from "axios";
import type { Movie } from "../types/movie";

const API_URL = "https://api.themoviedb.org/3/search/movie";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

interface MovieResponse {
  results: Movie[];
  total_pages: number;
}

export const fetchMovies = async (
  query: string,
  page: number
): Promise<MovieResponse> => {
  const { data } = await axios.get<MovieResponse>(API_URL, {
    params: {
      query,
      page,
      language: "en-US",
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return data;
};

// console.log("TOKEN:", import.meta.env.VITE_TMDB_TOKEN);
