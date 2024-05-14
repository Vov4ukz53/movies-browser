import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchMovieDetails, selectMovieError } from "./movieDetailsSlice";
import { Container } from "../../../common/Container";
import { MovieHeader } from "./MovieHeader";
import { MovieInfo } from "./MovieInfo";
import { Cast } from "./Cast";
import { Crew } from "./Crew";
import { ErrorPage } from "../../../common/ErrorPage";
import { Loader } from "../../../common/Loader";
import { selectMovieLoading } from "../MovieDetails/movieDetailsSlice";
import { useAppDispatch } from "../../../hooks/useAppDispatch";

export const MovieDetails = () => {
  const {id} = useParams();
  const loading = useSelector(selectMovieLoading);
  const movieError = useSelector(selectMovieError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchMovieDetails({id}))
  }, [dispatch, id]);

  if (loading) {
    return <Loader/>
  }

  if (movieError) {
    return <ErrorPage/>
  }

  return (
    <>
      <MovieHeader/>
      <Container>
        <MovieInfo/>
        <Cast/>
        <Crew/>
      </Container>
    </>
  )
};