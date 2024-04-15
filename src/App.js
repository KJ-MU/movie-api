import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "./store";

import { MoviesList } from "./components/MoviesList";

function App() {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies()); // Dispatch the action to fetch products
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <MoviesList />
      </header>
    </div>
  );
}

export default App;
