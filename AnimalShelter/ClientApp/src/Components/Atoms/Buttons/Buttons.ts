import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

const DefaultButton = styled.button`
  width: 85px;
  height: 35px;
  border-radius: 10px;
  transition: all 0.5s;
  :hover {
    color: ${(props: StyledTheme) => props.theme.colors.orange};
  }
`;

export const MediumButton = styled(DefaultButton)`
  color: ${(props: StyledTheme) => props.theme.colors.white};
  background-color: ${(props: StyledTheme) => props.theme.colors.black};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props: StyledTheme) => props.theme.fontSizes.small};
`;

export const LongButton = styled(MediumButton)`
  color: ${(props: StyledTheme) => props.theme.colors.white};
  background-color: ${(props: StyledTheme) => props.theme.colors.black};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props: StyledTheme) => props.theme.fontSizes.small};
  width: 150px;
`;
