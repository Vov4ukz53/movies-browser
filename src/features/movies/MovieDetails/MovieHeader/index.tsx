import { Container } from "../../../../common/Container";
import { apiUrlImage } from "../../../../api/apiData";
import { selectMovieDetails } from "../movieDetailsSlice";
import { Movie } from '../../../types'
import {
  Wrapper,
  Body,
  Backdrop,
  Content,
  Title,
  RatingBody,
  Rating,
  Star,
  Rate,
  Vote,
  Votes
} from "./styled";
import { useAppSelector } from "../../../../hooks/useAppSelector";

export const MovieHeader = () => {
  const movieDetails: Movie = useAppSelector(selectMovieDetails);

  return (
    <Wrapper>
      {movieDetails.backdrop_path &&
        <Container>
          {movieDetails &&
            <Body>
              <Backdrop src={`${apiUrlImage}w1280/${movieDetails.backdrop_path}`} />
              <Content>
                <Title>{movieDetails.original_title}</Title>
                <RatingBody>
                  <Rating>
                    <Star />
                    <Rate>
                      <Vote>{movieDetails.vote_average}</Vote>/ 10
                    </Rate>
                  </Rating>
                  <Votes>{movieDetails.vote_count} votes</Votes>
                </RatingBody>
              </Content>
            </Body>
          }
        </Container>
      }
    </Wrapper >
  );
}