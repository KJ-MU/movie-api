import "./App.css";
import "./slider.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  getNowPlaying,
  getUpComing,
  getPopular,
  getTopRated,
  getGenre,
} from "./store";
import MovieCarousel from "./components/MovieCarousel";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "./components/Carousel";
import NavBar from "./components/NavBar";
import BottomBar from "./components/bottomBar";
import MovieDetails from "./components/MovieDetails";
import DropdownMenu from "./components/DropdownMenu";
import ActorDetails from "./components/ActorDetails";
import { HomePage } from "./components/HomePage";
import { MoviesPage } from "./components/MoviesPage";
function App() {
  const movies = useSelector((state) => state.movies);
  const nowPlaying = useSelector((state) => state.nowPlaying);
  const topRated = useSelector((state) => state.topRated);
  const upComing = useSelector((state) => state.upComing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNowPlaying());
    dispatch(getPopular());
    dispatch(getGenre());
    dispatch(getUpComing());
    dispatch(getTopRated()); // Dispatch the action to fetch products
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      {/* <DropdownMenu
        isOpen={isOpen}
        selectedOption={selectedOption}
        toggleDropdown={toggleDropdown}
        handleOptionClick={handleOptionClick}
      /> */}
      {/* <DropdownMenu /> */}
      <Routes>
        {/* <Route path="/" element={<MovieCarousel slides={popular} />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/actor/:id" element={<ActorDetails />} />
        <Route path="/movies/:id" element={<MoviesPage />} />

        {/* <Carousel /> */}
      </Routes>

      <BottomBar />
    </div>
  );
}

export default App;
