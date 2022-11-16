import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const Label = styled.label`
  font-size: ${(props: StyledTheme) => props.theme.fontSizes.medium};
  display: flex;
  align-self: flex-start;
  margin: 0 5px 0 5px;
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.inter};
`;
