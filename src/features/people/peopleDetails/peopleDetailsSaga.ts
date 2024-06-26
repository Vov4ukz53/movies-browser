import { takeLatest, call, put, delay } from "redux-saga/effects";
import { getApi } from "../../../api/getApi";
import { apiUrl, apiKey } from "../../../api/apiData";
import {
  fetchPeopleDetails,
  setPeopleDetails,
  setMovies,
  setError,
} from "./peopleDetailsSlice";

interface Payload {
  id: string;
}

interface PeopleDetailsHandlerProps {
  type: string;
  payload: Payload;
}

function* fetchPeopleDetailsHandler({ payload: { id } }: PeopleDetailsHandlerProps): Generator {
  const person = `${apiUrl}person/${id}?api_key=${apiKey}`;
  const credits = `${apiUrl}person/${id}/movie_credits?api_key=${apiKey}`;

  try {
    yield delay(500);
    const peopleDetails = yield call(getApi, person);
    yield put(setPeopleDetails(peopleDetails));
    const creditsDetails = yield call(getApi, credits);
    yield put(setMovies(creditsDetails));
  }
  catch (error) {
    yield put(setError());
    console.error(error)
  }
};

function* peopleDetailsSaga() {
  yield takeLatest(fetchPeopleDetails.type, fetchPeopleDetailsHandler);
};

export default peopleDetailsSaga;