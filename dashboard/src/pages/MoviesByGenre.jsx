import MovieList  from "../components/MovieList";
import { useEffect, useState } from "react";
import { getMoviesByGenreId } from "../services/genres.services";

function MoviesByGenre({ match }) {
  const id = match.params.id;
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getMoviesByGenreId(id).then((moviesResult) => {
      setMovies(moviesResult.data);
    });
  }, []);

  return <>{movies && <MovieList movies={movies} />}</>;
}

export default MoviesByGenre;
