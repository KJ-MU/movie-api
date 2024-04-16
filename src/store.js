import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";

const initialState = {
    movies: [],
};

function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case "movie/fetch":
            return { ...state, movies: action.payload };
        default:
            break;
    }
    return state;
}
const store = createStore(moviesReducer, applyMiddleware(thunk));

export function getMovies() {
    return async (dispatch) => {
        try {
            const res = await fetch(
                "https://api.themoviedb.org/3/movie/popular?api_key=51b15414097474cf95e6f8917f62ca5e"
            );
            const data = await res.json();
            console.log("🚀 ~ return ~ data:", data.results)

            dispatch({ type: "movie/fetch", payload: data.results });
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };
}
export default store;