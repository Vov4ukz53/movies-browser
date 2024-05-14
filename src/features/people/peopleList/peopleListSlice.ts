import { createSlice } from "@reduxjs/toolkit";
import { totalPagesForLists } from "../../totalPagesForLists";
import { RootState } from "../../../store";
import { Person } from "../../types";

interface PeopleListProps {
  people: Person[];
  loading: boolean;
  error: boolean;
  totalPages: number;
  totalResults: number;
}

const initialState: PeopleListProps = {
  people: [],
  loading: false,
  error: false,
  totalPages: totalPagesForLists,
  totalResults: 0,
}

const peopleListSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    fetchPeople: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchPeopleSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.people = payload.results;
      state.totalPages = payload.total_pages;
      state.totalResults = payload.total_results;
      window.scrollTo(0, 0);
    },
    fetchPeopleFailure: state => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const {
  fetchPeople,
  fetchPeopleSuccess,
  fetchPeopleFailure,
} = peopleListSlice.actions;

const selectPeopleListState = (state: RootState) => state.people;

export const selectPeopleList = (state: RootState) => selectPeopleListState(state).people;
export const selectPeopleLoading = (state: RootState) => selectPeopleListState(state).loading;
export const selectPeopleError = (state: RootState) => selectPeopleListState(state).error;
export const selectPeopleTotalPage = (state: RootState) => selectPeopleListState(state).totalPages;
export const selectTotalPeopleResults = (state: RootState) => selectPeopleListState(state).totalResults;

export default peopleListSlice.reducer;