import { MediumButton } from "../../Atoms/Buttons/Buttons";
import {
  NavigationButtonsWrapper,
  NavigationLogo,
  NavigationWrapper,
} from "./Navigation.styles";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../../Routes/Routes";
import useAuth from "../../../Hooks/useAuth";

const Navigation = () => {
  const { index, registration, login } = routes;
  const location = useLocation();
  const { auth, setAuth } = useAuth();
  return (
    <NavigationWrapper>
      <NavigationLogo to={index} />
      <NavigationButtonsWrapper>
        {location.pathname === index && !auth && (
          <>
            <MediumButton as={Link} to={login}>
              Zaloguj
            </MediumButton>
            <MediumButton as={Link} to={registration}>
              Zarejestruj
            </MediumButton>
          </>
        )}

        {auth && (
          <MediumButton onClick={() => setAuth(null)}>Wyloguj</MediumButton>
        )}
        {location.pathname === login && !auth && (
          <MediumButton as={Link} to={registration}>
            Zarejestruj
          </MediumButton>
        )}
        {location.pathname === registration && !auth && (
          <MediumButton as={Link} to={login}>
            Zaloguj
          </MediumButton>
        )}
      </NavigationButtonsWrapper>
    </NavigationWrapper>
  );
};

export default Navigation;
