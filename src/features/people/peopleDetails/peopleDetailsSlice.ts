import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
import { Movie, Person } from "../../types";

interface PeopleDetailsProps {
  peopleDetails: Person;
  cast: Movie[];
  crew: Movie[];
  loading: boolean;
  error: boolean;
}

const initialState: PeopleDetailsProps = {
  peopleDetails: {},
  cast: [],
  crew: [],
  loading: false,
  error: false,
}

const peopleDetailsSlice = createSlice({
  name: 'peopleDetails',
  initialState,
  reducers: {
    fetchPeopleDetails: state => {
      state.loading = true;
    },
    setPeopleDetails: (state, { payload: peopleDetailsApi }) => {
      state.peopleDetails = peopleDetailsApi;
      state.loading = false;
    },
    setMovies: (state, { payload }) => {
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
  fetchPeopleDetails,
  setPeopleDetails,
  setMovies,
  setError,
} = peopleDetailsSlice.actions;

const selectPeopleDetailsState = (state: RootState) => state.peopleDetails;

export const selectPeopleDetails = (state: RootState)  => selectPeopleDetailsState(state).peopleDetails;
export const selectPeopleCast = (state: RootState) => selectPeopleDetailsState(state).cast;
export const selectPeopleCrew = (state: RootState) => selectPeopleDetailsState(state).crew;
export const selectLoading = (state: RootState) => selectPeopleDetailsState(state).loading;
export const selectError = (state: RootState) => selectPeopleDetailsState(state).error;

export default peopleDetailsSlice.reducer;