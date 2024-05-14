import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import movieDetailsReducer from "./features/movies/MovieDetails/movieDetailsSlice";
import movieListReducer from "./features/movies/MovieList/movieListSlice";
import peopleListReducer from "./features/people/peopleList/peopleListSlice";
import peopleDetailsReducer from "./features/people/peopleDetails/peopleDetailsSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    moviesDetails: movieDetailsReducer,
    movies: movieListReducer,
    people: peopleListReducer,
    peopleDetails: peopleDetailsReducer,
  },
  middleware: [sagaMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga);

export default store;