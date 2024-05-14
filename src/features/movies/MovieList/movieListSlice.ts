import { createSlice } from "@reduxjs/toolkit";
import { totalPagesForLists } from "../../totalPagesForLists";
import { Genre, Movie } from "../../types";
import { RootState } from "../../../store";

interface MoviesListProps {
  movies: Movie[];
  genres: Genre[];
  loading: boolean;
  error: boolean;
  totalPages: number;
  totalResults: number;
}

const initialState: MoviesListProps = {
  movies: [],
  genres: [],
  loading: false,
  error: false,
  totalPages: totalPagesForLists,
  totalResults: 0,
}

const moviesListSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMovies: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchMoviesSuccess: (state, {payload}) => {
      state.loading = false;
      state.error = false;
      state.movies = payload.results;
      state.totalPages = payload.total_pages;
      state.totalResults = payload.total_results;
      window.scrollTo(0, 0);
    },
    fetchMoviesFailure: state => {
      state.error = true;
      state.loading = false;
    },
    setGenres: (state, {payload: genresApi}) => {
      state.genres = genresApi.genres;
    },
  },
});

export const {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  setGenres,
} = moviesListSlice.actions;

const selectMoviesState = (state: RootState) => state.movies;

export const selectMovies = (state: RootState) => selectMoviesState(state).movies;
export const selectLoading = (state: RootState) => selectMoviesState(state).loading;
export const selectError = (state: RootState) => selectMoviesState(state).error;
export const selectGenres = (state: RootState) => selectMoviesState(state).genres;
export const selectTotalMoviesPages = (state: RootState) => selectMoviesState(state).totalPages;
export const selectTotalResults = (state: RootState) => selectMoviesState(state).totalResults;

export default moviesListSlice.reducer;