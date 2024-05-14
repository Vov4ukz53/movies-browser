import { call, put, takeLatest, delay } from 'redux-saga/effects'
import { getApi } from '../../../api/getApi'
import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesFailure,
  setGenres,
} from './movieListSlice'
import {
  apiUrlGenres,
  apiUrlPopularMovies,
  apiUrlSearchMovies,
} from '../../../api/apiData'

interface Payload {
  page: string;
  query: string;
}

interface MovieListProps {
  type: string;
  payload: Payload;
}

function* fetchMovieListHandler({payload: {page, query}}: MovieListProps): Generator {
  const moviesWithoutQuery = `${apiUrlPopularMovies}&page=${page ? page : '1'}`
  const moviesWithQuery = `${apiUrlSearchMovies}&query=${query}&page=${page}`

  try {
    yield delay(500)
    const apiRequest = yield call(getApi, !query
      ? moviesWithoutQuery
      : moviesWithQuery,
    )
    const genres = yield call(getApi, apiUrlGenres)
    yield put(fetchMoviesSuccess(apiRequest))
    yield put(setGenres(genres))
  } catch (error) {
    yield put(fetchMoviesFailure())
    console.error(error)
  }
}

function* movieListSaga() {
  yield takeLatest(fetchMovies.type, fetchMovieListHandler)
}

export default movieListSaga