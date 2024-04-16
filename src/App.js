import logo from './logo.svg';
import './App.css';
import "./slider.css";
import MovieCarousel from './components/MovieCarousel';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "./store";
import { MoviesList } from "./components/MoviesList";



function App() {
  const OPTIONS = { loop: true }
  const movies = useSelector((state) => state.movies);
  console.log("🚀 ~ App ~ movies:", movies)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies()); // Dispatch the action to fetch products
  }, [dispatch]);

  return (
    <div className="App">
      <MovieCarousel slides={movies} />
      <MoviesList />

    </div >
  );
}

export default App;
