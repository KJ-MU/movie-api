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
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./components/NavBar";
import BottomBar from "./components/bottomBar";
import MovieDetails from "./components/MovieDetails";
import ActorDetails from "./components/ActorDetails";
import DropdownMenu from "./components/DropdownMenu";
import { HomePage } from "./pages/HomePage";
import { MoviesPage } from "./pages/MoviesPage";
import ActorsList from "./components/ActorsList";
import About from "./components/About";


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
    dispatch(getTopRated());
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
        <Route path="/actors" element={<ActorsList />} />
        <Route path="/about" element={<About />} />


        {/* <Carousel /> */}
      </Routes>

      <BottomBar />
    </div>
  );
}

export default App;
