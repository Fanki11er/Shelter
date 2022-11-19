import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const AnimalsListWrapper = styled.ul`
  list-style: none;
  padding: 15px 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  width: 800px;
  background-image: linear-gradient(
    ${(props: StyledTheme) => props.theme.gradients.mainPinkGradientReversed}
  );
  border-radius: 15px;
`;

export const AnimalsListElement = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-rows: 65px 150px 100px;
  justify-items: flex-start;
`;

export const AnimalsListElementHeader = styled.h3`
  grid-column: 1/3;
`;

export const AnimalsListElementPhotoPlaceholder = styled.img`
  width: 100%;
  height: 100%;
  grid-column: 1/2;
  border-radius: 5px;
`;

export const AnimalsListElementPhoto = styled.img`
  width: 100%;
  height: 100%;
  grid-column: 1/2;
`;

export const AnimalsListElementContent = styled.p`
  grid-column: 1/3;
`;

export const AnimalsListElementAnimalInfoWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-rows: auto;
  grid-column: 2/3;
  grid-row: 2/3;
  margin-left: 100px;
`;
export const AnimalsListElementAnimalInfo = styled.span`
  width: 100%;
  height: 100%;
  text-align: start;
  display: flex;
  align-items: center;
`;
