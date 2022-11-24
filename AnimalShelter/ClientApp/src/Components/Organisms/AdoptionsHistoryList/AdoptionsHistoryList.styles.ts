import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const AdoptionsHistoryListContainer = styled.div`
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

export const AdoptionsHistoryListHeader = styled.h2`
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.inter};
  font-weight: normal;
`;

export const AdoptionsHistoryListWrapper = styled.ul`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 40px;
  row-gap: 15px;
  justify-items: center;
  padding: 0 25px;
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.inter};
`;

export const AdoptionsHistoryListElement = styled.li`
  width: 100%;
  border: 3px solid ${(props: StyledTheme) => props.theme.colors.frame};
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.backgroundLightGray};
  align-items: center;
  padding: 0 15px;
`;

export const AdoptionHistoryInfo = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NoElementsInfo = styled.h3`
  width: fit-content;
  display: flex;
  justify-self: center;
  align-items: center;
`;
