import "./App.css";
import "./App.css";
import "./slider.css";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNowPlaying, getUpComing, getPopular, getTopRated } from "./store";
import { getMovies } from "./store";

import NavBar from "./components/NavBar";
import MovieCarousel from "./components/MovieCarousel";
import Carousel from "./components/Carousel";
import MoviesList from "./components/MoviesList";
import BottomBar from "./components/bottomBar";

function App() {
  // const movies = useSelector((state) => state.movies);
  const nowPlaying = useSelector((state) => state.nowPlaying);
  console.log("🚀 ~ App ~ nowPlaying:", nowPlaying);
  const popular = useSelector((state) => state.popular);
  const topRated = useSelector((state) => state.topRated);
  const upComing = useSelector((state) => state.upComing);
  const searchResults = useSelector((state) => state.searchResults);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNowPlaying());
    dispatch(getPopular());
    dispatch(getUpComing());
    dispatch(getTopRated());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      {/* <MovieCarousel slides={popular} /> */}
      {/* <Carousel /> */}
      <MoviesList searchResults={searchResults} />
      <BottomBar />
    </div>
  );
}

export default App;
