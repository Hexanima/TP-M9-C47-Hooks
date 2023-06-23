import {  Routes, Route } from "react-router-dom";
import ContentRowTop from "../components/ContentRowTop";
import NotFound from "../pages/NotFound";
import MoviesByGenre from "../pages/MoviesByGenre";
import LastMovie from "../pages/LastMovie";
import SearchMovies from "../pages/SearchMovies";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ContentRowTop />} />
      <Route path="/last" element={<LastMovie/>} />
      <Route path="/genres/:id" element={<MoviesByGenre />} />
      <Route path="/search" element={<SearchMovies/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
