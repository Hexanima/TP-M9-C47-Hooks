function MovieListItem({ movie }) {
  let movieGenre = movie.genre ? movie.genre.name : ""


  return (
    <tr>
      <td>{movie.title}</td>
      <td>{movie.rating}</td>
      <td>{movie.awards}</td>
      <td>{movie.length}</td>
      <td>{movieGenre}</td>
    </tr>
  );
}

export default MovieListItem;
