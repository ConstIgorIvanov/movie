import { configureStore } from '@reduxjs/toolkit';
import movieSlice from '../features/movie/movieSlice';
import { localSave } from '../middleware/localStorage';
const store = configureStore({
  reducer: {
    movie: movieSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localSave),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
