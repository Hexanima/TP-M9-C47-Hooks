import PropTypes from "prop-types";
import GenresInDbCard from "./Card";

function GenresInDb({ genres }) {
  function handleMouseOver() {
    document.querySelector(".fondoCaja").classList.add("bg-secondary");
  }

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5
            className="m-0 font-weight-bold text-gray-800"
            onMouseOver={handleMouseOver}
          >
            Genres in Data Base
          </h5>
        </div>
        <div className="card-body fondoCaja">
          <div className="row">
            {genres.map(genre => (
              <GenresInDbCard genre={genre} key={genre.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

GenresInDb.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

GenresInDb.defaultProps = {
  genres: [],
};

export default GenresInDb;
