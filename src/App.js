import "./App.css";
import "./slider.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getNowPlaying, getUpComing, getPopular, getTopRated } from "./store";
import MovieCarousel from "./components/MovieCarousel";
import { useSelector, useDispatch } from "react-redux";
import { MoviesList } from "./components/MoviesList";
import Carousel from "./components/Carousel";
import NavBar from "./components/NavBar";
import BottomBar from "./components/bottomBar";
import MovieDetails from "./components/MovieDetails";
import Navbar from "flowbite-react";
import MovieCard from "./components/MovieCard";
import ActorDetails from "./components/ActorDetails";

function App() {
  const movies = useSelector((state) => state.movies);
  const nowPlaying = useSelector((state) => state.nowPlaying);
  const popular = useSelector((state) => state.popular);
  const topRated = useSelector((state) => state.topRated);
  const upComing = useSelector((state) => state.upComing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNowPlaying());
    dispatch(getPopular());
    dispatch(getUpComing());
    dispatch(getTopRated()); // Dispatch the action to fetch products
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<MovieCarousel slides={popular} />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/actor/:id" element={<ActorDetails />} />

        {/* Other routes... */}
      </Routes>
    </div>
  );
}

export default App;
