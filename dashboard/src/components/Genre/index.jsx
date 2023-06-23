import { getGenres } from "../../services/genres.services";
import GenresInDb from "../GenresInDb";
import { useEffect, useState } from "react";

function Genre() {
  const [genres, setGenres] = useState(null);

  useEffect(() => {
    getGenres().then((genresResult) => {
      setGenres(genresResult.data);
    });
  }, []);
  return <> {genres && <GenresInDb genres={genres} />} </>;
}

export default Genre;
