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
  search,
} from "./store";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./components/NavBar";
import BottomBar from "./components/bottomBar";
import MovieDetails from "./components/MovieDetails";
import ActorDetails from "./components/ActorDetails";
import { HomePage } from "./pages/HomePage";
import { MoviesPage } from "./pages/MoviesPage";
import ActorsList from "./components/ActorsList";
import MoviesList from "./components/MoviesList";
import About from "./components/About";


function App() {
  const searchResults = useSelector((state) => state.searchResults); //!FOR SEARCH
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNowPlaying());
    dispatch(getPopular());
    dispatch(getGenre());
    dispatch(getUpComing());
    dispatch(getTopRated());
    dispatch(search()); //!FOR SEARCH
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/actor/:id" element={<ActorDetails />} />
        <Route path="/movies/:id" element={<MoviesPage />} />
        <Route path="/actors" element={<ActorsList />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <MoviesList searchResults={searchResults} /> {/*//!FOR SEARCH */}
      <BottomBar />
    </div>
  );
}

export default App;
