import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const OptionsFormWrapper = styled.div`
  width: 900px;
  height: auto;
  background-image: linear-gradient(
    ${(props: StyledTheme) => props.theme.gradients.mainPinkGRadient}
  );
  border-radius: 10px;
  padding: 20px 40px;
  display: grid;
  grid-template-rows: 30px 50px 50px 50px;
  grid-row-gap: 15px;
  align-self: center;
  justify-items: center;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const OptionsHeader = styled.h2`
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.inter};
  font-weight: normal;
`;

export const ImgOptions = styled.img`
  width: 70px;
  height: 70px;
  position: absolute;
  top: 30px;
  left: 30px;
`;
