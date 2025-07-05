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

// import axios from "axios";
// import type { AxiosResponse } from "axios";
// import type { Movie } from "../types/movie";

// const BASE_URL = "https://api.themoviedb.org/3";
// const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

// const axiosConfig = {
//   headers: {
//     Authorization: `Bearer ${TOKEN}`,
//   },
// };

// export const fetchMovies = async (query: string): Promise<Movie[]> => {
//   const response: AxiosResponse<{ results: Movie[] }> = await axios.get(
//     `${BASE_URL}/search/movie`,
//     {
//       params: {
//         query,
//         language: "en-US",
//         include_adult: false,
//       },
//       ...axiosConfig,
//     }
//   );
//   return response.data.results;
// };

// export const fetchMovieById = async (id: number): Promise<Movie> => {
//   const response: AxiosResponse<Movie> = await axios.get(
//     `${BASE_URL}/movie/${id}`,
//     {
//       params: {
//         language: "en-US",
//       },
//       ...axiosConfig,
//     }
//   );
//   return response.data;
// };

// console.log("TOKEN:", import.meta.env.VITE_TMDB_TOKEN);
