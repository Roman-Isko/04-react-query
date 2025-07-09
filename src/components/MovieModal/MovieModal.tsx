import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { Movie } from "../../types/movie";
import styles from "./MovieModal.module.css";

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

const modalRoot = document.getElementById("modal-root") as HTMLElement;

const MovieModal = ({ movie, onClose }: MovieModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={handleBackdropClick}
    >
      <div className={styles.modal}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <img
          src={
            movie.backdrop_path
              ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
              : "https://placehold.co/500x750?text=No+Image"
            // : "https://via.placeholder.com/1280x720?text=No+Image"
          }
          alt={movie.title}
          className={styles.image}
        />
        <div className={styles.content}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Rating:</strong> {movie.vote_average}/10
          </p>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default MovieModal;

// import { useEffect } from "react";
// import { createPortal } from "react-dom";
// import type { Movie } from "../../types/movie";
// import styles from "./MovieModal.module.css";

// interface MovieModalProps {
//   movie: Movie;
//   onClose: () => void;
// }

// const modalRoot = document.getElementById("modal-root")!;

// const MovieModal = ({ movie, onClose }: MovieModalProps) => {
//   const { title, overview, release_date, vote_average, backdrop_path } = movie;

//   // Закриття по Escape
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         onClose();
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//       document.body.style.overflow = "auto";
//     };
//   }, [onClose]);

//   // Закриття по кліку на бекдроп
//   const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   return createPortal(
//     <div
//       className={styles.backdrop}
//       role="dialog"
//       aria-modal="true"
//       onClick={handleBackdropClick}
//     >
//       <div className={styles.modal}>
//         <button
//           className={styles.closeButton}
//           aria-label="Close modal"
//           onClick={onClose}
//         >
//           &times;
//         </button>
//         <img
//           className={styles.image}
//           src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
//           alt={title}
//         />
//         <div className={styles.content}>
//           <h2>{title}</h2>
//           <p>{overview}</p>
//           <p>
//             <strong>Release Date:</strong> {release_date}
//           </p>
//           <p>
//             <strong>Rating:</strong> {vote_average}/10
//           </p>
//         </div>
//       </div>
//     </div>,
//     modalRoot
//   );
// };

// export default MovieModal;
