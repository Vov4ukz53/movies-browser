import { useEffect } from "react";
import { Container } from "../../../common/Container";
import { PersonTile } from "../../../common/PersonTile";
import { Wrapper } from "./styled";
import { WrapperLink } from "../../../common/WrapperLink/styled";
import { apiUrlImage } from "../../../api/apiData";
import { Pagination } from "../../../common/Pagination";
import { Loader } from "../../../common/Loader";
import { Title } from "../../../common/Title/styled";
import { ErrorPage } from "../../../common/ErrorPage";
import { useQueryParameter } from "../../../hooks/useQueryParameter";
import { Section } from "../../../common/Section/styled";
import { NoResultsPage } from "../../../common/NoResultsPage";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import personError from "../../../images/personError.jpg";
import {
  fetchPeople,
  selectPeopleError,
  selectPeopleList,
  selectPeopleLoading, selectPeopleTotalPage,
  selectTotalPeopleResults
} from "./peopleListSlice";

export const PeopleList = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectPeopleLoading);
  const error = useAppSelector(selectPeopleError);
  const people = useAppSelector(selectPeopleList);
  const totalResults = useAppSelector(selectTotalPeopleResults);
  const query = useQueryParameter("search");
  const page = useQueryParameter("page");
  const totalPages = useAppSelector(selectPeopleTotalPage);

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchPeople({query, page}));
  }, [dispatch, query, page]);

  if ((page && query && error) || (query && totalResults === 0)) {
    return <Container>
      <NoResultsPage/>
    </Container>
  }

  if (loading) {
    return (
      <Container>
        <Title>
          {!!query && query !== ""
            ? `Search results for "${query[0].toUpperCase() + query.slice(1)}"`
            : "Popular people"
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
              {!!query && query !== ""
                ? `Search results for "${query[0].toUpperCase() + query.slice(1)}" (${totalResults})`
                : "Popular people"
              }
            </Title>
            <Wrapper>
              {[...people].map((person) => {
                return (
                  <WrapperLink key={person.id} to={`/movies-browser/people/${person.id}`}>
                    <PersonTile
                      poster={person.profile_path
                        ? `${apiUrlImage}w300/${person.profile_path}`
                        : personError}
                      name={person.name}
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