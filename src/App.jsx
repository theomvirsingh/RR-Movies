import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Templates/Trending";
import Popular from "./Components/Templates/Popular";
import Movies from "./Components/Templates/Movies";
import TvShows from "./Components/Templates/TvShows";
import TvDetails from "./Components/Templates/TvDetails";
import MovieDetails from "./Components/Templates/MovieDetails";
import Trailer from "./Components/Templates/Trailer";
import NotFound from "./Components/Templates/NotFound";
import PersonDetails from "./Components/Templates/PersonDetails";
import Person from "./Components/Templates/Person";
function App() {
  return (
    <>
      <div className="w-full h-screen bg-[#1f1e24] flex" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/popular" element={<Popular />} />

          <Route path="/movie" element={<Movies />} />

          <Route path="/movie/details/:id" element={<MovieDetails />}>
            <Route path="/movie/details/:id/trailer" element={<Trailer />} />
          </Route>

          <Route path="/tv" element={<TvShows />} />
          <Route path="/tv/details/:id" element={<TvDetails />}>
            <Route path="/tv/details/:id/trailer" element={<Trailer />} />
          </Route>

          <Route path="/person" element={<Person />} />
          <Route path="/person/details/:id" element={<PersonDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
