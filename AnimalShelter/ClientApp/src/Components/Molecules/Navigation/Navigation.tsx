import { MediumButton } from "../../Atoms/Buttons/Buttons";
import {
  NavigationButtonsWrapper,
  NavigationLogo,
  NavigationWrapper,
} from "./Navigation.styles";
import { Link } from "react-router-dom";
import { routes } from "../../../Routes/Routes";

const Navigation = () => {
  const { index, registration, login } = routes;
  return (
    <NavigationWrapper>
      <NavigationLogo to={index} />
      <NavigationButtonsWrapper>
        <MediumButton as={Link} to={login}>
          Zaloguj
        </MediumButton>
        <MediumButton as={Link} to={registration}>
          Zarejestruj
        </MediumButton>
      </NavigationButtonsWrapper>
    </NavigationWrapper>
  );
};

export default Navigation;
