import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const AnimalsListWithFilterWrapper = styled.ul`
  width: 100%;
  height: auto;
  min-height: 150px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 40px;
  row-gap: 10px;
  background-color: transparent;
  list-style: none;
  padding: 0 15px;
  border-radius: 10px;
  justify-items: center;
`;

export const AnimalsListWithFilterPlaceholder = styled.h3`
  width: fit-content;
  display: flex;
  text-align: center;
  font-weight: bold;
  justify-self: center;
`;

export const AnimalsListWithFilterRow = styled.li`
  display: grid;
  row-gap: 5px;
  width: 100%;
  height: 100%;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.backgroundLightGray};
  border-radius: 10px;
  align-items: center;
  padding: 0 0 0 40px;
  grid-template-columns: 1fr 100px;
`;

export const AnimalsCheckboxLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
