import styles from "./MovieGrid.module.css";
import type { Movie } from "../../types/movie";

interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

const MovieGrid = ({ movies, onSelect }: MovieGridProps) => {
  if (movies.length === 0) return null;

  return (
    <ul className={styles.grid}>
      {movies.map((movie) => (
        <li key={movie.id} onClick={() => onSelect(movie)}>
          <div className={styles.card}>
            <img
              className={styles.image}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/500x750?text=No+Image"
              }
              alt={movie.title}
              loading="lazy"
            />
            <h2 className={styles.title}>{movie.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieGrid;

// import styles from "./MovieGrid.module.css";
// import type { Movie } from "../../types/movie";

// interface MovieGridProps {
//   movies: Movie[];
//   onSelect: (id: number) => void;
// }

// const MovieGrid = ({ movies, onSelect }: MovieGridProps) => {
//   if (movies.length === 0) return null;

//   return (
//     <ul className={styles.grid}>
//       {movies.map(({ id, poster_path, title }) => (
//         <li key={id} onClick={() => onSelect(id)}>
//           <div className={styles.card}>
//             <img
//               className={styles.image}
//               src={
//                 poster_path
//                   ? `https://image.tmdb.org/t/p/w500${poster_path}`
//                   : "https://via.placeholder.com/500x750?text=No+Image"
//               }
//               alt={title}
//               loading="lazy"
//             />
//             <h2 className={styles.title}>{title}</h2>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default MovieGrid;
