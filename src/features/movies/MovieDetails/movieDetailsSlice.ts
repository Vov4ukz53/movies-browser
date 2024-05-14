import { createSlice } from "@reduxjs/toolkit";
import { Movie, Person} from "../../types";
import { RootState } from "../../../store";

interface MovieDetailsState {
  movieDetails: Movie;
  cast: Person[];
  crew: Person[];
  loading: boolean;
  error: boolean;
}

const initialState: MovieDetailsState = {
  movieDetails: {},
  cast: [],
  crew: [],
  loading: false,
  error: false,
}

const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {
    fetchMovieDetails: state => {
      state.loading = true;
    },
    setMovieDetails: (state, { payload: movieDetailsApi }) => {
      state.movieDetails = movieDetailsApi;
      state.loading = false;
    },
    setMovieTeam: (state, { payload }) => {
      state.cast = payload.cast;
      state.crew = payload.crew;
    },
    setError: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchMovieDetails,
  setMovieDetails,
  setMovieTeam,
  setError,
} = movieDetailsSlice.actions;

const selectMovieDetailsState = (state: RootState) => state.moviesDetails;

export const selectMovieDetails = (state: RootState) => selectMovieDetailsState(state).movieDetails;
export const selectMovieCast = (state: RootState) => selectMovieDetailsState(state).cast;
export const selectMovieCrew = (state: RootState) => selectMovieDetailsState(state).crew;
export const selectMovieLoading = (state: RootState) => selectMovieDetailsState(state).loading;
export const selectMovieError = (state: RootState) => selectMovieDetailsState(state).error;


export default movieDetailsSlice.reducer;