import { Link } from "react-router-dom";
import { routes } from "../../../Routes/Routes";
import { Species } from "../../../Types/types";
import { Utils } from "../../../Utils/Utils";
import { LongButton } from "../../Atoms/Buttons/Buttons";
import {
  PortalToAnimalsListButtonWrapper,
  PortalToAnimalsListHeader,
  PortalToAnimalsListWrapper,
} from "./PortalToAnimalsList.styles";

type Props = {
  headerSubtext: string;
  buttonSubstring: string;
  animalsToAdoptionAmount: number;
  species: Species;
};
const PortalToAnimalsList = (props: Props) => {
  const { headerSubtext, animalsToAdoptionAmount, buttonSubstring, species } =
    props;
  const { animalsList } = routes;
  return (
    <PortalToAnimalsListWrapper>
      <PortalToAnimalsListHeader>{`Adoptuj ${headerSubtext}... ${animalsToAdoptionAmount} ${Utils.getAgeEnding(
        animalsToAdoptionAmount,
        ["zwierzak", "zwierzaki", "zwierzaków"]
      )} czeka na Ciebie`}</PortalToAnimalsListHeader>
      <PortalToAnimalsListButtonWrapper>
        <LongButton
          as={Link}
          to={animalsList}
          state={{
            species,
          }}
        >{`Zobacz ${buttonSubstring}`}</LongButton>
      </PortalToAnimalsListButtonWrapper>
    </PortalToAnimalsListWrapper>
  );
};

export default PortalToAnimalsList;
