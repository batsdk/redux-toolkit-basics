import { configureStore } from "@reduxjs/toolkit";

import movieReducer from "./features/movies/movieSlice";
import showsReducer from "./features/shows/showsSlice";

export const Store  = configureStore(
    {
        reducer : {
            movie : movieReducer,
            shows : showsReducer
        }
    }
)