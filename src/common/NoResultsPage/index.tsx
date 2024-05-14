import image from "../NoResultsPage/icons/no-results.svg";
import { Image } from "./styled";
import { Title } from "../../common/Title/styled";
import { useQueryParameter } from "../../hooks/useQueryParameter";
import { Loader } from "../Loader";

export const NoResultsPage = () => {
  const query = useQueryParameter("search");

  return (
    !query || query === ""
      ? <Loader/>
      :
      <>
        <Title>
          Sorry, there are no results for "{query[0].toUpperCase()}{query.slice(1)}"
        </Title>
        <Image src={image}/>
      </>
  );
};