import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isFetching: false,
  movies: [],
  currentMovie: { },
  page: 1,
  limit: 8,
};

export const getMovie = createAsyncThunk(
  "movie/getMovie",
  async (page, { rejectWithValue, dispatch }) => {
    let response = await axios.get(
      `https://yts.mx/api/v2/list_movies.json?page=${page}`
    );
    let movie = await response.data.data.movies;
    dispatch(getMoviesList(movie));
  }
);
export const setCurrentMovie = createAsyncThunk(
  "movie/setMovie",
  async (id, { rejectWithValue, dispatch }) => {
    let response = await axios.get(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    let movie = await response.data.data.movie;
    dispatch(setMovie(movie));
  }
);
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setFetching: (state) => {
      state.isFetching = !state.isFetching;
    },
    setMovie: (state, action) => {
      state.currentMovie = {...action.payload, comments: []};
    },
    setCurrentPage: (state, action) => {
      state.page = action.payload;
    },
    getMoviesList: (state, action) => {
      state.movies = action.payload;
    },
    setComments: (state, action) => {
      state.currentMovie.comments.push(action.payload);
    },
  },
  extraReducers: {
    [getMovie.pending]: (state) => {
      state.isFetching = !state.isFetching;
    },
    [getMovie.fulfilled]: (state) => {
      state.isFetching = !state.isFetching;
    },
    [getMovie.rejected]: () => console.log("getMovie: rejected"),
    [setCurrentMovie.pending]: (state) => {
      state.isFetching = !state.isFetching;
    },
    [setCurrentMovie.fulfilled]: (state) => {
      state.isFetching = !state.isFetching;
    },
    [setCurrentMovie.rejected]: () => console.log("getMovie: rejected"),
  },
});

export const {
  setFetching,
  setMovie,
  setCurrentPage,
  getMoviesList,
  setComments,
} = movieSlice.actions;
export default movieSlice.reducer;
