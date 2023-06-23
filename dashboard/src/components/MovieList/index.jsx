import MovieListItem from "./Item";
import PropTypes from "prop-types";

function MovieList({ movies }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Título</th>
          <th scope="col">Calificación</th>
          <th scope="col">Premios</th>
          <th scope="col">Duración</th>
          <th scope="col">Género</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie, i) => (
          <MovieListItem movie={movie} key={movie + i} />
        ))}
      </tbody>
    </table>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;
