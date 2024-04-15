import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk"; // Import thunk correctly
// now playing https://api.themoviedb.org/3/movie/now_playing
// Popular https://api.themoviedb.org/3/movie/popular\
// Top Rated https://api.themoviedb.org/3/movie/top_rated
// Upcoming https://api.themoviedb.org/3/movie/upcoming
const initialState = {
  nowPlaying: [],
  popular: [],
  topRated: [],
  upComing: [],
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case "nowPlaying/fetch":
      return { ...state, nowPlaying: action.payload };

      break;
    case "popular/fetch":
      return { ...state, popular: action.payload };

      break;
    case "topRated/fetch":
      return { ...state, topRated: action.payload };

      break;
    case "upComing/fetch":
      return { ...state, upComing: action.payload };
    default:
      break;
  }

  return state;
}
const store = createStore(moviesReducer, applyMiddleware(thunk));

export function getNowPlaying() {
  return async (dispatch) => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=51b15414097474cf95e6f8917f62ca5e"
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
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=51b15414097474cf95e6f8917f62ca5e"
      );
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
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=51b15414097474cf95e6f8917f62ca5e"
      );
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
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=51b15414097474cf95e6f8917f62ca5e"
      );
      const data = await res.json();
      dispatch({ type: "upComing/fetch", payload: data.results });
    } catch (error) {
      console.error("Error fetching upComing:", error);
    }
  };
}
export default store;
