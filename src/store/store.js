import { configureStore } from "@reduxjs/toolkit";
import movieSlice from '../features/movie/movieSlice'
import { localSave } from "../middlewaer/localStorage";
export const store = configureStore({
  reducer: {
    movie: movieSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localSave),
});