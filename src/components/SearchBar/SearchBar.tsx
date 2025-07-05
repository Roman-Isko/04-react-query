import { useState } from "react";
import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (formData: FormData) => {
    const inputValue = formData.get("query")?.toString().trim();

    if (!inputValue) {
      toast.error("Please enter your search query.");
      return;
    }

    onSubmit(inputValue);
    setQuery(""); // очищення інпуту після сабміту
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>

        {/* ✨ Form Actions API через action */}
        <form className={styles.form} action={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;

// import { useState } from "react";
// import type { FormEvent } from "react";
// import toast from "react-hot-toast";
// import styles from "./SearchBar.module.css";

// interface SearchBarProps {
//   onSubmit: (query: string) => void;
// }

// const SearchBar = ({ onSubmit }: SearchBarProps) => {
//   const [query, setQuery] = useState("");

//   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const trimmedQuery = query.trim();

//     if (trimmedQuery === "") {
//       toast.error("Please enter your search query.");
//       return;
//     }

//     onSubmit(trimmedQuery);
//     setQuery(""); // очищення інпуту після сабміту
//   };

//   return (
//     <header className={styles.header}>
//       <div className={styles.container}>
//         <a
//           className={styles.link}
//           href="https://www.themoviedb.org/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by TMDB
//         </a>
//         <form className={styles.form} onSubmit={handleSubmit}>
//           <input
//             className={styles.input}
//             type="text"
//             name="query"
//             autoComplete="off"
//             placeholder="Search movies..."
//             autoFocus
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//           />
//           <button className={styles.button} type="submit">
//             Search
//           </button>
//         </form>
//       </div>
//     </header>
//   );
// };

// export default SearchBar;
