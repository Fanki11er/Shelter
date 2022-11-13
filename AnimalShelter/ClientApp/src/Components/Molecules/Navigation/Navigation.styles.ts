import styled from "styled-components";
import { Link } from "react-router-dom";
import AppLogo from "../../../Assets/Images/AppLogo.svg";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const NavigationWrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: grid;
  padding: 0 10px;
  grid-template-columns: 100px 1fr 220px;
  grid-template-rows: 100%;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    ${(props: StyledTheme) => props.theme.gradients.mainPinkGRadient}
  );
`;

export const NavigationLogo = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${AppLogo});
  background-size: contain;
  background-repeat: no-repeat;
  padding: 5px 0;
`;

export const NavigationButtonsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  grid-column: 3/4;
`;
