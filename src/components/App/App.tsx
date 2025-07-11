import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import ReactPaginate from "react-paginate";
import toast from "react-hot-toast";

import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import MovieModal from "../MovieModal/MovieModal";

import { fetchMovies } from "../../services/movieService";
import type { Movie } from "../../types/movie";

import styles from "./App.module.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["movies", query, page],
    queryFn: () => fetchMovies(query, page),
    enabled: !!query,
    placeholderData: (prev) => prev,
  });

  useEffect(() => {
    if (isSuccess && data.results.length === 0) {
      toast.error("No movies found for your request.");
    }
  }, [isSuccess, data]);

  const handleSearch = (newQuery: string) => {
    if (newQuery !== query) {
      setQuery(newQuery);
      setPage(1);
    }
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />

      {isLoading && <Loader />}
      {isError && <ErrorMessage />}

      {isSuccess && data.results.length > 0 && (
        <>
          <MovieGrid movies={data.results} onSelect={handleMovieClick} />

          {data.total_pages > 1 && (
            <ReactPaginate
              pageCount={data.total_pages}
              pageRangeDisplayed={5}
              marginPagesDisplayed={1}
              onPageChange={handlePageChange}
              forcePage={page - 1}
              containerClassName={styles.pagination}
              activeClassName={styles.active}
              nextLabel="→"
              previousLabel="←"
            />
          )}
        </>
      )}

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default App;

// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import ReactPaginate from "react-paginate";
// import toast from "react-hot-toast";

// import SearchBar from "../SearchBar/SearchBar";
// import MovieGrid from "../MovieGrid/MovieGrid";
// import Loader from "../Loader/Loader";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";
// import MovieModal from "../MovieModal/MovieModal";

// import { fetchMovies } from "../../services/movieService";
// import type { Movie } from "../../types/movie";

// import styles from "./App.module.css";

// const App = () => {
//   const [query, setQuery] = useState("");
//   const [page, setPage] = useState(1);
//   const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

//   const { data, isLoading, isError } = useQuery<MovieResponse, Error>({
//     queryKey: ["movies", query, page],
//     queryFn: () => fetchMovies(query, page),
//     enabled: !!query,
//     placeholderData: () => ({
//       results: [],
//       total_pages: 0,
//     }),
//   });

//   const handleSearch = (newQuery: string) => {
//     if (newQuery !== query) {
//       setQuery(newQuery);
//       setPage(1);
//     }
//   };

//   const handlePageChange = ({ selected }: { selected: number }) => {
//     setPage(selected + 1);
//   };

//   const handleMovieClick = (movie: Movie) => {
//     setSelectedMovie(movie);
//   };

//   const handleCloseModal = () => {
//     setSelectedMovie(null);
//   };

//   return (
//     <>
//       <SearchBar onSubmit={handleSearch} />

//       {isLoading && <Loader />}
//       {isError && <ErrorMessage />}
//       {data &&
//         data.results.length === 0 &&
//         toast.error("No movies found for your request.")}

//       {data && data.results.length > 0 && (
//         <>
//           <MovieGrid movies={data.results} onSelect={handleMovieClick} />

//           {data.total_pages > 1 && (
//             <ReactPaginate
//               pageCount={data.total_pages}
//               pageRangeDisplayed={5}
//               marginPagesDisplayed={1}
//               onPageChange={handlePageChange}
//               forcePage={page - 1}
//               containerClassName={styles.pagination}
//               activeClassName={styles.active}
//               nextLabel="→"
//               previousLabel="←"
//             />
//           )}
//         </>
//       )}

//       {selectedMovie && (
//         <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
//       )}
//     </>
//   );
// };

// export default App;
