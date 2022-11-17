import { LongButton } from "../../Atoms/Buttons/Buttons";
import {
  ImgOptions,
  OptionsFormWrapper,
  OptionsHeader,
} from "./OptionsForm.styles";
import OptionsImg from "../../../Assets/Images/Options.svg";

const OptionsForm = () => {
  return (
    <OptionsFormWrapper>
      <OptionsHeader>Opcje</OptionsHeader>
      <LongButton>Adopcja zwierząt</LongButton>
      <LongButton>Dodaj lokatora</LongButton>
      <LongButton>Statystyki</LongButton>
      <ImgOptions src={OptionsImg} alt="optionsImg" />
    </OptionsFormWrapper>
  );
};
export default OptionsForm;
