import { useSelector } from "react-redux";
import { selectMovieCrew } from "../movieDetailsSlice";
import { Section } from "../../../../common/Section/styled";
import { Title } from "../../../../common/Title/styled";
import { Wrapper } from "../Wrapper";
import { WrapperLink } from "../../../../common/WrapperLink/styled";
import { PersonTile } from "../../../../common/PersonTile";
import { apiUrlImage } from "../../../apiData";
import personError from "../../../../images/personError.jpg";

export const Crew = () => {
  const movieCrew = useSelector(selectMovieCrew);

  return (
    <Section last>
      {movieCrew.length !== 0 &&
        <>
          <Title movie last>Crew</Title>
          <Wrapper>
            {movieCrew && [...movieCrew].slice(0, 12).map((person, index) => {
              return (
                <WrapperLink key={index} to={`/people/${person.id}`}>
                  <PersonTile
                    large
                    poster={
                      person.profile_path
                        ? `${apiUrlImage}w342/${person.profile_path}`
                        : personError
                    }
                    name={person.name}
                    info={person.job}
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