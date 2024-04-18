import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk"; // Import thunk correctly
// now playing https://api.themoviedb.org/3/movie/now_playing
// Popular https://api.themoviedb.org/3/movie/popular\
// Top Rated https://api.themoviedb.org/3/movie/top_rated
// Upcoming https://api.themoviedb.org/3/movie/upcoming
//`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=YOUR_API_KEY`
const initialState = {
  nowPlaying: [],
  popular: [],
  topRated: [],
  upComing: [],
  movieDetails: {},
  movieCast: [],
  castDetails: {},
  director: {},
  trailer: "",
  bookmark: [],
  genre: [],
  moviesByGenre: [],
  AcotrMovies: [],
  actors: [],
};
const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "51b15414097474cf95e6f8917f62ca5e";

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case "AcotrMovies/fetch":
      return { ...state, AcotrMovies: action.payload };
    case "moviesByGenre/fetch":
      return { ...state, moviesByGenre: action.payload };
    case "nowPlaying/fetch":
      return { ...state, nowPlaying: action.payload };
    case "popular/fetch":
      return { ...state, popular: action.payload };
    case "topRated/fetch":
      return { ...state, topRated: action.payload };
    case "upComing/fetch":
      return { ...state, upComing: action.payload };
    case "details/fetch":
      return { ...state, movieDetails: action.payload };
    case "cast/fetch":
      return { ...state, movieCast: action.payload };
    case "castDetails/fetch":
      return { ...state, castDetails: action.payload };
    case "director/fetch":
      return { ...state, director: action.payload };
    case "trailer/fetch":
      return { ...state, trailer: action.payload };
    case "actors/fetch":
      return { ...state, actors: action.payload };
    case "bookmark/add":
      return { ...state, bookmark: [...state.bookmark, action.payload] };
    case "bookmark/remove":
      return {
        ...state,
        bookmark: state.bookmark.filter((movie) => movie.id !== action.payload),
      };
    case "genre/fetch":
      return { ...state, genre: action.payload };
    default:
      break;
  }

  return state;
}
const store = createStore(moviesReducer, applyMiddleware(thunk));

export function getActors(id) {
  return async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}person/popular?api_key=${API_KEY}`);
      const data = await res.json();
      dispatch({ type: "actors/fetch", payload: data.results });
    } catch (error) {
      console.error("Error fetching actors:", error);
    }
  };
}
// setTodoList((oldTodoList) => {
//   const newArray = [...oldTodoList, newTodoObj];
//   localStorage.setItem("todoList", JSON.stringify(newArray));
//   return newArray;
// });
export function addBookmark(movie) {
  return (dispatch, getState) => {
    const { bookmark } = getState();
    const isAlreadyBookmarked = bookmark.some(
      (bookmarkMovie) => bookmarkMovie.id === movie.id
    );

    if (!isAlreadyBookmarked) {
      dispatch({ type: "bookmark/add", payload: movie });
    }
  };
}

export function removeBookmark(movieId) {
  return { type: "bookmark/remove", payload: movieId };
}

export function getTrailer(id) {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `${BASE_URL}movie/${id}/videos?api_key=${API_KEY}`
      );
      const data = await res.json();
      const trailer = "https://www.youtube.com/embed/" + data.results[0].key;
      dispatch({ type: "trailer/fetch", payload: trailer });
    } catch (error) {
      console.error("Error fetching director:", error);
    }
  };
}

export function getDirector(id) {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
      );
      const data = await res.json();
      const director = data.crew.filter(({ job }) => job === "Director");
      dispatch({ type: "director/fetch", payload: director });
    } catch (error) {
      console.error("Error fetching director:", error);
    }
  };
}

export function getCastDetails(id) {
  return async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}person/${id}?api_key=${API_KEY}`);
      const data = await res.json();
      dispatch({ type: "castDetails/fetch", payload: data });
    } catch (error) {
      console.error("Error fetching movieCast:", error);
    }
  };
}

export function getMovieCast(id) {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
      );
      const data = await res.json();
      dispatch({ type: "cast/fetch", payload: data.cast });
    } catch (error) {
      console.error("Error fetching movieCast:", error);
    }
  };
}
export function getMovieDetails(id) {
  return async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
      const data = await res.json();
      dispatch({ type: "details/fetch", payload: data });
    } catch (error) {
      console.error("Error fetching movieDetails:", error);
    }
  };
}

export function getNowPlaying() {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `${BASE_URL}movie/now_playing?api_key=${API_KEY}`
      );
      const data = await res.json();
      dispatch({ type: "nowPlaying/fetch", payload: data.results });
    } catch (error) {
      console.error("Error fetching nowPlaying:", error);
    }
  };
}
export function getPopular() {
  return async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}`);
      const data = await res.json();
      dispatch({ type: "popular/fetch", payload: data.results });
    } catch (error) {
      console.error("Error fetching popular:", error);
    }
  };
}
export function getTopRated() {
  return async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}movie/top_rated?api_key=${API_KEY}`);
      const data = await res.json();
      dispatch({ type: "topRated/fetch", payload: data.results });
    } catch (error) {
      console.error("Error fetching topRated:", error);
    }
  };
}
export function getUpComing() {
  return async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}movie/upcoming?api_key=${API_KEY}`);
      const data = await res.json();
      dispatch({ type: "upComing/fetch", payload: data.results });
    } catch (error) {
      console.error("Error fetching upComing:", error);
    }
  };
}
export function getGenre() {
  return async (dispatch) => {
    try {
      const res = await fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`);
      const data = await res.json();
      dispatch({ type: "genre/fetch", payload: data.genres });
    } catch (error) {
      console.error("Error fetching genre:", error);
    }
  };
}
export function getMoviesByGenre(id) {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=${id}`
      );
      const data = await res.json();
      dispatch({ type: "moviesByGenre/fetch", payload: data.results });
    } catch (error) {
      console.error("Error fetching moviesByGenre:", error);
    }
  };
}
export function getActorMovies(id) {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `${BASE_URL}person/${id}/movie_credits?api_key=${API_KEY}`
      );
      const data = await res.json();
      dispatch({ type: "AcotrMovies/fetch", payload: data.cast });
    } catch (error) {
      console.error("Error fetching AcotrMovies:", error);
    }
  };
}
export default store;
