import { MediumButton } from "../../Atoms/Buttons/Buttons";
import {
  AnimalAdoptionFormWrapper,
  AnimalAdoptionHeader,
  AnimalAdoptionImg,
  CheckboxAnimalAdoption,
  LabelAndCheckboxAnimalAdoptionWrapper,
  LabelAnimalAdoption,
  LabelChooseCandidate,
  MediumButtonWrapper,
  SelectAndLabelWrapper,
  SelectCandidateForAdoption,
} from "./AnimalAdoptionForm.styles";
import ImgAnimalAdoption from "../../../Assets/Images/AnimalAdoption.svg";

const AnimalAdoptionForm = () => {
  return (
    <AnimalAdoptionFormWrapper>
      <AnimalAdoptionHeader>Adopcja zwierząt</AnimalAdoptionHeader>
      <SelectAndLabelWrapper>
        <LabelChooseCandidate>Wybierz kandydata</LabelChooseCandidate>
        <SelectCandidateForAdoption></SelectCandidateForAdoption>
      </SelectAndLabelWrapper>
      <LabelAndCheckboxAnimalAdoptionWrapper>
        <LabelAnimalAdoption>
          Misia kundel 6lat samica Legowisko: 2 Boks: 1
        </LabelAnimalAdoption>
        <CheckboxAnimalAdoption />
        <LabelAndCheckboxAnimalAdoptionWrapper />
      </LabelAndCheckboxAnimalAdoptionWrapper>
      <LabelAndCheckboxAnimalAdoptionWrapper>
        <LabelAnimalAdoption>
          Misia kundel 6lat samica Legowisko: 2 Boks: 1
        </LabelAnimalAdoption>
        <CheckboxAnimalAdoption />
      </LabelAndCheckboxAnimalAdoptionWrapper>
      <LabelAndCheckboxAnimalAdoptionWrapper>
        <LabelAnimalAdoption>
          Misia kundel 6lat samica Legowisko: 2 Boks: 1
        </LabelAnimalAdoption>
        <CheckboxAnimalAdoption />
      </LabelAndCheckboxAnimalAdoptionWrapper>
      <MediumButtonWrapper>
        <MediumButton>Dodaj</MediumButton>
      </MediumButtonWrapper>
      <AnimalAdoptionImg src={ImgAnimalAdoption} alt="ImgAnimalAdoption" />
    </AnimalAdoptionFormWrapper>
  );
};

export default AnimalAdoptionForm;
