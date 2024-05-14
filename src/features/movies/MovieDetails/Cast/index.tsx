import { selectMovieCast } from "../movieDetailsSlice";
import { Section } from "../../../../common/Section/styled";
import { Wrapper } from "../Wrapper";
import { PersonTile } from "../../../../common/PersonTile";
import { WrapperLink } from "../../../../common/WrapperLink/styled";
import { apiUrlImage } from "../../../../api/apiData";
import personError from "../../../../images/personError.jpg";
import { Title } from "../../../../common/Title/styled";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { Person } from "../../../types";

export const Cast = () => {
  const movieCast: Person[] = useAppSelector(selectMovieCast);

  return (
    <Section>
      {movieCast.length !== 0 && <>
        <Title movie>Cast</Title>
        <Wrapper>
          {movieCast && [...movieCast].slice(0, 12).map((person) => {
            return (
              <WrapperLink key={person.id} to={`/movies-browser/people/${person.id}`}>
                <PersonTile
                  large
                  poster={
                    person.profile_path
                      ? `${apiUrlImage}w342/${person.profile_path}`
                      : personError
                  }
                  name={person.name}
                  info={person.character}
                />
              </WrapperLink>
            )
          })}
        </Wrapper>
      </>
      }
    </Section>
  )
};