import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";
import PawnImage from "../../../Assets/Images/Pawn.svg";

export const FooterWrapper = styled.footer`
  display: grid;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    ${(props: StyledTheme) => props.theme.gradients.mainPinkGRadient}
  );
  grid-row: 3/4;
  grid-template-columns: 100px 1fr 120px;
  grid-template-rows: 100%;
  padding: 0 10px;
  justify-content: center;
`;

export const FooterIconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  grid-column: 1/2;
  align-items: center;
`;

export const FooterYearSpan = styled.span`
  width: fit-content;
  padding: 0 5px;
  font-weight: bold;
`;

export const FooterImage = styled.svg`
  background-image: url(${PawnImage});
  background-position: center;
  width: 70%;
  height: 70%;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const FooterAuthorsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  grid-column: 3/4;
  padding: 5px 0;
`;

export const FooterAuthorSpan = styled.span`
  font-size: 12px;
`;
