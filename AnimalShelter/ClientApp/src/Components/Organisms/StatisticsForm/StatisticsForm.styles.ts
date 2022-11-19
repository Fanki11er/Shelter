import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const StatisticsFormWrapper = styled.div`
  width: 1000px;
  height: auto;
  background-image: linear-gradient(
    ${(props: StyledTheme) => props.theme.gradients.mainPinkGRadient}
  );
  border-radius: 10px;
  padding: 20px 40px;
  display: grid;
  grid-template-rows: 30px 50px 50px 50px 50px 50px 50px 80px;
  grid-row-gap: 15px;
  align-self: center;
  justify-items: center;
  align-items: center;
  justify-content: center;
`;

export const StatisticsHeader = styled.h2`
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.inter};
  font-weight: normal;
`;

export const TextStatistics = styled.span`
  width: 700px;
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.inter};
  font-weight: normal;
  border: 3px solid ${(props: StyledTheme) => props.theme.colors.frame};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.backgroundLightGray};
`;
