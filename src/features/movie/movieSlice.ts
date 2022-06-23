import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type Movie = {
  id: number;
  title: string;
  year: number;
  image: string;
  rating: number;
  genres: string[];
  large_cover_image: string;
  description_full: string;
  medium_cover_image: string;
};

export interface CurrentMovie extends Movie {
  large_cover_image: string;
  description_full: string;
  comments?: string[];
}

type MovieState = {
  isFetching: boolean;
  movies: Movie[];
  currentMovie: CurrentMovie;
  page: number;
  limit: number;
};

type MoviesQuery = {
  data: { movies: Movie[] };
};
type CurrentMovieQuery = {
  data: { movie: CurrentMovie };
};

const initialState: MovieState = {
  isFetching: false,
  movies: [],
  currentMovie: {
    id: 1,
    title: 'test',
    year: 1,
    image: 'test',
    rating: 2,
    genres: ['test'],
    large_cover_image: 'test',
    description_full: 'test',
    medium_cover_image: 'test',
  },
  page: 1,
  limit: 8,
};

export const getMovie = createAsyncThunk(
  'movie/getMovie',
  async (page: number, { rejectWithValue, dispatch }) => {
    let response = await axios.get<MoviesQuery>(
      `https://yts.mx/api/v2/list_movies.json?page=${page}`,
    );
    let movie: Movie[] = await response.data.data.movies;
    dispatch(getMoviesList(movie));
  },
);
export const setCurrentMovie = createAsyncThunk(
  'movie/setMovie',
  async (id: number, { rejectWithValue, dispatch }) => {
    let response = await axios.get<CurrentMovieQuery>(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`,
    );
    let movie: CurrentMovie = await response.data.data.movie;
    dispatch(setMovie(movie));
  },
);

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setFetching: (state) => {
      state.isFetching = !state.isFetching;
    },
    setMovie: (state, action: PayloadAction<CurrentMovie>) => {
      state.currentMovie = { ...action.payload, comments: [] };
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    getMoviesList: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
    setComments: (state, action: PayloadAction<string>) => {
      if (state.currentMovie?.comments) {
        state.currentMovie.comments.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovie.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(getMovie.fulfilled, (state, action) => {
      state.isFetching = false;
    });
    builder.addCase(getMovie.rejected, (state, action) => {
      console.log('Reject');
    });
    builder.addCase(setCurrentMovie.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(setCurrentMovie.fulfilled, (state, action) => {
      state.isFetching = false;
    });
  },
});

export const { setFetching, setMovie, setCurrentPage, getMoviesList, setComments } =
  movieSlice.actions;
export default movieSlice.reducer;
