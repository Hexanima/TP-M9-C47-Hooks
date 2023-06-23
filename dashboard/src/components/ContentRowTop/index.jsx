import ContentRowMovies from "../ContentRowMovies";
import LastMovieInDb from "../LastMovieInDb";
import mandalorian from "../../assets/images/mandalorian.jpg";
import Movie from "../Movie";
import Genre from "../Genre";

function ContentRowTop() {
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>

      {/* <!-- Content Row Movies--> */}
      <ContentRowMovies infoList={[{}, {}, {}]} />
      {/* <!-- End movies in Data Base --> */}

      {/* <!-- Content Row Last Movie in Data Base --> */}
      <div className="row">
        {/* <!-- Last Movie in DB --> */}
        <LastMovieInDb
          photo={mandalorian}
          title="Star Wars - Mandalorian"
          description="Lorem ipsum dolor sit amet"
        />
        {/* <!-- End content row last movie in Data Base --> */}

        {/* <!-- Genres in DB --> */}
        <Genre />
      </div>

      <Movie />
    </>
  );
}

export default ContentRowTop;
