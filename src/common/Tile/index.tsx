import { selectGenres } from "../../features/movies/MovieList/movieListSlice";
import {
  Poster,
  Rating,
  RatingLine,
  Star,
  Tag,
  TagsLine,
  TextSide,
  Title,
  Votes,
  Wrapper,
  Year,
  LabelWrapper,
  Label,
  LabelInfo,
  RatingTotal,
  Overview
} from "./styled";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Genre } from "../../features/types";

interface TileProps {
  poster: string;
  title: string;
  year?: string;
  label?: string;
  labelInfo?: string;
  nextLabel?: string;
  nextLabelInfo?: string;
  rating?: number;
  voteCount?: number;
  genres?: number[];
  movieInfo?: boolean;
  ratingTotal?: string;
  overview: string;
  person?: boolean;
}

export const Tile = ({
  poster,
  title,
  year,
  label,
  labelInfo,
  nextLabel,
  nextLabelInfo,
  rating,
  voteCount,
  genres,
  movieInfo,
  ratingTotal,
  overview,
  person
}: TileProps) => {
  const genresList: Genre[] = useAppSelector(selectGenres);

  return (
    <Wrapper big={movieInfo}>
      <Poster big={movieInfo} person={person} src={poster} alt="poster" />
      <TextSide big={movieInfo}>
        <Title big={movieInfo}>{title}</Title>
        <Year big={movieInfo}>{year}</Year>
        <LabelWrapper big={movieInfo}>
          <Label person={person}>{label}</Label>
          <LabelInfo>{labelInfo}</LabelInfo>
        </LabelWrapper>
        <LabelWrapper big={movieInfo}>
          <Label person={person}>{nextLabel}</Label>
          <LabelInfo>{nextLabelInfo}</LabelInfo>
        </LabelWrapper>
        {genresList.length > 0 &&
          <TagsLine big={movieInfo}>
            {genres && genres.map((genre, index) => (
              <Tag big={movieInfo} key={index}>
                {[...genresList].find((item) => item.id === genre)!.name}
              </Tag>
            ))
            }
          </TagsLine>
        }
        <RatingLine big={movieInfo} person={person}>
          <Star />
          <Rating big={movieInfo}>{rating}</Rating>
          <RatingTotal>{ratingTotal}</RatingTotal>
          <Votes big={movieInfo}>{voteCount} votes</Votes>
        </RatingLine>
        <Overview big={movieInfo} person={person}>{overview}</Overview>
      </TextSide>
    </Wrapper >
  )
};