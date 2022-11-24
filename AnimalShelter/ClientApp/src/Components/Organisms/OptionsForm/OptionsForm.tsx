import { LongButton } from "../../Atoms/Buttons/Buttons";
import {
  ImgOptions,
  OptionsFormWrapper,
  OptionsHeader,
} from "./OptionsForm.styles";
import OptionsImg from "../../../Assets/Images/Options.svg";
import { Link } from "react-router-dom";
import { routes } from "../../../Routes/Routes";

const OptionsForm = () => {
  const {
    addAnimalForm,
    statistics,
    adoption,
    addCandidateForm,
    adoptionsHistory,
  } = routes;
  return (
    <OptionsFormWrapper>
      <OptionsHeader>Opcje</OptionsHeader>
      <LongButton as={Link} to={adoption}>
        Adopcja zwierząt
      </LongButton>
      <LongButton as={Link} to={addAnimalForm}>
        Dodaj lokatora
      </LongButton>
      <LongButton as={Link} to={addCandidateForm}>
        Dodaj kandydata
      </LongButton>
      <LongButton as={Link} to={statistics}>
        Statystyki
      </LongButton>
      <LongButton as={Link} to={adoptionsHistory}>
        Historia adopcji
      </LongButton>
      <ImgOptions src={OptionsImg} alt="optionsImg" />
    </OptionsFormWrapper>
  );
};
export default OptionsForm;
