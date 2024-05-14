import { call, put, takeLatest, delay } from "redux-saga/effects";
import { getApi } from "../../../api/getApi";
import {
  fetchPeople,
  fetchPeopleSuccess,
  fetchPeopleFailure,
} from "./peopleListSlice";
import { apiUrlPopularPeople, apiUrlSearchPeople } from "../../../api/apiData";

interface Payload {
  page: string;
  query: string;
}

interface PeopleListHandlerProps {
  type: string;
  payload: Payload;
}

function* fetchPeopleListHandler({ payload: { page, query } }: PeopleListHandlerProps): Generator {
  const peopleWithoutQuery = `${apiUrlPopularPeople}&page=${page ? page : "1"}`;
  const peopleWithQuery = `${apiUrlSearchPeople}&query=${query}&page=${page}`;

  try {
    yield delay(500);
    const people = yield call(getApi, !query
      ? peopleWithoutQuery
      : peopleWithQuery
    );
    yield put(fetchPeopleSuccess(people));
  }
  catch (error) {
    yield put(fetchPeopleFailure())
  }
};

function* peopleListSaga() {
  yield takeLatest(fetchPeople.type, fetchPeopleListHandler);
};

export default peopleListSaga;