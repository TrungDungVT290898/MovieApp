import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filmsSlice from "../../src/features/movie/movieSlice"
export const store = configureStore({
    reducer: combineReducers({

        films: filmsSlice,
    }),
});
