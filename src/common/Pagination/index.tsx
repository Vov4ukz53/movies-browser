import { useLocation } from "react-router";
import { selectTotalMoviesPages, selectTotalResults } from "../../features/movies/MovieList/movieListSlice";
import { selectPeopleTotalPage } from "../../features/people/peopleList/peopleListSlice";
import { useReplaceQueryParameter } from "../../hooks/useReplaceQueryParameter";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useQueryParameter } from "../../hooks/useQueryParameter";
import { totalPagesForLists } from "../../features/totalPagesForLists";
import {
  Wrapper,
  ArrowIcon,
  ArrowIconNext,
  Button,
  ButtonText,
  PageInfo,
  Span
} from "./styled";


export const Pagination = () => {
  const replaceQueryParameter = useReplaceQueryParameter();
  const location = useLocation();
  const totalResults = useAppSelector(selectTotalResults);
  const totalPeopleResults = useAppSelector(selectPeopleTotalPage);
  const pageParameter = +useQueryParameter("page")!;
  const page = pageParameter === 0 ? 1 : pageParameter;

  const totalPage = useAppSelector(
    location.pathname === "/movie" ? selectTotalMoviesPages : selectPeopleTotalPage
  );

  const totalCurrentPage = totalPage > totalPagesForLists ? totalPagesForLists : totalPage;

  const goToAnotherPage = (page: string) => {
    replaceQueryParameter({
      value: page,
      key: "page",
    });
  };

  if ((totalResults && totalResults <= 20) || (totalPeopleResults && totalPeopleResults <= 20)) {
    return <></>
  }

  return (
    <Wrapper>
      <Button
        disabled={page === 1}
        onClick={() => goToAnotherPage("1")}
      >
        <ArrowIcon mobile="true"/>
        <ArrowIcon/>
        <ButtonText>First</ButtonText>
      </Button>
      <Button disabled={page === 1}
              onClick={() => goToAnotherPage((page - 1).toString())}
      >
        <ArrowIcon/>
        <ButtonText>Previous</ButtonText>
      </Button>
      <PageInfo>
        Page
        <Span>{page}</Span>
        of
        <Span last>{totalCurrentPage}</Span>
      </PageInfo>
      <Button next disabled={page === totalCurrentPage}
              onClick={() => goToAnotherPage((page + 1).toString())}
      >
        <ButtonText>Next</ButtonText>
        <ArrowIconNext/>
      </Button>
      <Button next disabled={page === totalCurrentPage}
              onClick={() => goToAnotherPage(totalCurrentPage.toString())}
      >
        <ButtonText>Last</ButtonText>
        <ArrowIconNext mobile="true"/>
        <ArrowIconNext/>
      </Button>
    </Wrapper>
  );
};