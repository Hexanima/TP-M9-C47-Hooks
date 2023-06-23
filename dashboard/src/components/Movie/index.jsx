import MovieList from "../MovieList";
import { getMovies } from "../../services/movies.services";
import { useEffect, useState } from "react";

function Movie() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getMovies().then((moviesResult) => {
      setMovies(moviesResult.data);
    });
  }, []);

  return <>{movies && <MovieList movies={movies} />}</>;
}

export default Movie;
