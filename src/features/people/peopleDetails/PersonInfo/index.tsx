import { useSelector } from "react-redux";
import { Section } from "../../../../common/Section/styled";
import { Tile } from "../../../../common/Tile";
import { apiUrlImage } from "../../../../api/apiData";
import { selectPeopleDetails } from "../peopleDetailsSlice";
import { Person } from "../../../types";
import personError from "../../../../images/personError.jpg";

export const PersonInfo = () => {
  const personDetails: Person = useSelector(selectPeopleDetails);

  return (
    <Section person>
      {personDetails &&
        <Tile
          movieInfo
          person
          poster={personDetails.profile_path
            ? `${apiUrlImage}w500/${personDetails.profile_path}`
            : personError
          }
          title={personDetails.name!}
          label={"Date of birth: "}
          labelInfo={personDetails.birthday
            ? personDetails.birthday
            : "Unknown"
          }
          nextLabel={"Place of birth:"}
          nextLabelInfo={personDetails.place_of_birth
            ? personDetails.place_of_birth
            : "Unknown"
          }
          overview={personDetails.biography
            ? personDetails.biography
            : "Unknown"
          }
        />
      }
    </Section>
  )
};