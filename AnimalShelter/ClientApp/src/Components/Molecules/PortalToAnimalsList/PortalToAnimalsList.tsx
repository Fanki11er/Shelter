import { Spices } from "../../../Types/types";
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
  spices: Spices;
};
const PortalToAnimalsList = (props: Props) => {
  const { headerSubtext, animalsToAdoptionAmount, buttonSubstring } = props;
  return (
    <PortalToAnimalsListWrapper>
      <PortalToAnimalsListHeader>{`Adoptuj ${headerSubtext}...  ${animalsToAdoptionAmount} zwierzaków czeka na Ciebie`}</PortalToAnimalsListHeader>
      <PortalToAnimalsListButtonWrapper>
        <LongButton>{`Zobacz ${buttonSubstring}`}</LongButton>
      </PortalToAnimalsListButtonWrapper>
    </PortalToAnimalsListWrapper>
  );
};

export default PortalToAnimalsList;
