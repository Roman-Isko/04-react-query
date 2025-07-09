export interface Movie {
  id: number;
  poster_path: string | null;
  backdrop_path: string | null;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

export interface MovieResponse {
  results: Movie[];
  total_pages: number;
}

// export interface Movie {
//   id: number;
//   poster_path: string | null;
//   backdrop_path: string | null;
//   title: string;
//   overview: string;
//   release_date: string;
//   vote_average: number;
// }

///...///

// export interface Movie {
//   id: number;
//   poster_path: string;
//   backdrop_path: string;
//   title: string;
//   overview: string;
//   release_date: string;
//   vote_average: number;
// }

// export interface MovieResponse {
//   page: number;
//   results: Movie[];
//   total_pages: number;
//   total_results: number;
// }
