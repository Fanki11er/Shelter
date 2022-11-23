import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const AnimalsListWithFilterWrapper = styled.ul`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  background-color: transparent;
  list-style: none;
  padding: 0 15px;
  border-radius: 10px;
  justify-items: center;
`;

export const AnimalsListWithFilterRow = styled.li`
  display: grid;
  row-gap: 5px;
  width: 100%;
  height: 40px;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.backgroundLightGray};
  border-radius: 10px;
  align-items: center;
  padding: 0 40px;
  grid-template-columns: 1fr 40px;
`;

export const AnimalsCheckboxLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
