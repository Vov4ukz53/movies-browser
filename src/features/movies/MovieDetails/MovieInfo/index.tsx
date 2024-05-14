import { Section } from "../../../../common/Section/styled";
import { Tile } from "../../../../common/Tile";
import { apiUrlImage } from "../../../../api/apiData";
import { selectMovieDetails } from "../movieDetailsSlice";
import posterError from "../../../../images/posterError.png";
import { Movie } from "../../../types";
import { useAppSelector } from "../../../../hooks/useAppSelector";

export const MovieInfo = () => {
  const movieDetails: Movie = useAppSelector(selectMovieDetails);

  return (
    <Section>
      {movieDetails &&
        <Tile
          movieInfo
          poster={movieDetails.poster_path
            ? `${apiUrlImage}w342/${movieDetails.poster_path}`
            : posterError
          }
          title={movieDetails.original_title ? movieDetails.original_title : ""}
          year={movieDetails.release_date ? (movieDetails.release_date).slice(0, 4) : ""}
          label={"Production:"}
          labelInfo={movieDetails.production_countries?.length !== 0
            ? (movieDetails.production_countries?.map(item => item.name).slice(0, 2).join(", "))
            : "Unknown"
          }
          nextLabel={"Release date:"}
          nextLabelInfo={movieDetails.release_date ? movieDetails.release_date : "Unknown"}
          genres={movieDetails.genres && movieDetails.genres.map(genre => genre.id)}
          rating={movieDetails.vote_average}
          ratingTotal={"/10"}
          voteCount={movieDetails.vote_count}
          overview={movieDetails.overview ? movieDetails.overview : "Overview: Unknown!"}
        />
      }
    </Section>
  )
};