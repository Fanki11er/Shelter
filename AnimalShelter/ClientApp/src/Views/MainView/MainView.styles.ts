import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";
import Pawn from "../../Assets/Images/Pawn.svg";

export const MainViewWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.backgroundLightGray};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 180px 150px 150px 1fr;
  padding: 30px;
  grid-row-gap: 15px;
`;

export const MainViewHeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 200px;
  height: 150px;
  padding: 0 30px;
  align-items: center;
`;

export const MainViewHeader = styled.h1`
  margin: 0;
  font-size: 50px;
`;

export const MainViewHeaderIcon = styled.svg`
  background-image: url(${Pawn});
  background-size: contain;
  background-repeat: no-repeat;
  width: 70%;
  height: 70%;
`;
