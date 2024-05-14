import { nanoid } from "@reduxjs/toolkit";
import { Pagination } from "../../../common/Pagination";
import { Container } from "../../../common/Container";
import { Tile } from "../../../common/Tile"
import { Wrapper } from "./styled";
import { apiUrlImage } from "../../../api/apiData";
import { useEffect } from "react";
import {
  fetchMovies,
  selectLoading,
  selectError,
  selectMovies,
  selectTotalResults,
  selectTotalMoviesPages
} from "./movieListSlice";
import { Title } from "../../../common/Title/styled";
import { WrapperLink } from "../../../common/WrapperLink/styled";
import { Loader } from "../../../common/Loader";
import { ErrorPage } from "../../../common/ErrorPage";
import { Section } from "../../../common/Section/styled";
import { NoResultsPage } from "../../../common/NoResultsPage";
import posterError from "../../../images/posterError.png";
import { useQueryParameter } from "../../../hooks/useQueryParameter";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { Movie } from "../../types";

export const MovieList = () => {
  const dispatch = useAppDispatch();
  const loading: boolean = useAppSelector(selectLoading);
  const error: boolean = useAppSelector(selectError);
  const totalResults: number = useAppSelector(selectTotalResults);
  const totalPages = useAppSelector(selectTotalMoviesPages);
  const movies: Movie[] = useAppSelector(selectMovies);
  const query = useQueryParameter("search");
  const page = useQueryParameter("page");

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchMovies({query, page}));
  }, [dispatch, query, page]);

  if ((page && query && error) || (query && totalResults === 0)) {
    return (
      <Container>
        <NoResultsPage/>
      </Container>
    )
  }

  if (loading) {
    return (
      <Container>
        <Title>
          {query
            ? `Search results for "${query[0].toUpperCase() + query.slice(1)}"`
            : "Popular movies"
          }
        </Title>
        <Loader/>
      </Container>
    )
  }

  return (
    <Container>
      <Section last>
        {error || (page && (+page > totalPages))
          ? <ErrorPage/>
          : <>
            <Title>
              {query
                ? `Search results for "${query[0].toUpperCase() + query.slice(1)}" (${totalResults})`
                : "Popular movies"
              }
            </Title>
            <Wrapper>
              {[...movies].map((movie) => {
                return (
                  <WrapperLink key={nanoid()} to={`/movies-browser/movie/${movie.id}`}>
                    <Tile
                      poster={
                        movie.poster_path
                          ? `${apiUrlImage}w500/${movie.poster_path}`
                          : posterError
                      }
                      title={movie.title!}
                      year={movie.release_date ? (movie.release_date).slice(0, 4) : "year: unknown"}
                      genres={movie.genre_ids}
                      rating={movie.vote_average}
                      voteCount={movie.vote_count}
                      overview={movie.overview ? movie.overview : "Overview: Unknown!"}
                    />
                  </WrapperLink>
                )
              })}
            </Wrapper>
            <Pagination/>
          </>
        }
      </Section>
    </Container>
  )
};