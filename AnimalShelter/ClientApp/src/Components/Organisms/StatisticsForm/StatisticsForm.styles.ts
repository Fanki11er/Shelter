import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

type Amount = {
  amount: number;
};

const colorAmount = (amount: number, colors: StyledTheme) => {
  if (amount > 3) {
    return colors.theme.colors.green;
  } else if (amount > 1.5) {
    return colors.theme.colors.orange;
  } else {
    return colors.theme.colors.red;
  }
};

export const StatisticsFormWrapper = styled.div`
  width: 1000px;
  height: auto;
  background-image: linear-gradient(
    ${(props: StyledTheme) => props.theme.gradients.mainPinkGRadient}
  );
  grid-template-columns: 1fr;
  border-radius: 10px;
  padding: 50px 40px;
  display: grid;
  grid-auto-rows: auto;
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

export const StatisticsList = styled.ul`
  width: 400px;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 40px;
  row-gap: 15px;
  justify-items: center;
  padding: 0 25px;
  //font-family: ${(props: StyledTheme) => props.theme.fontFamily.inter};
  //font-weight: normal;
`;

export const TextStatisticsElement = styled.li`
  width: 100%;
  border: 3px solid ${(props: StyledTheme) => props.theme.colors.frame};
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 50px;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.backgroundLightGray};
  align-items: center;
  padding: 0 15px;
`;

export const StatisticInfo = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const ColoredSpan = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  color: ${(props: StyledTheme & Amount) => colorAmount(props.amount, props)};
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
