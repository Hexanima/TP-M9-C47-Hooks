import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./card.css"
function GenresInDbCard({ genre }) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card bg-dark text-white shadow">
        <Link to={`/genres/${genre.id}`}>
          <div className="card-body">{genre.name}</div>
        </Link>
      </div>
    </div>
  );
}

GenresInDbCard.propTypes = {};

export default GenresInDbCard;
