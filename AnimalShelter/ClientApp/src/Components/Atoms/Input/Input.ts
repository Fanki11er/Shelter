import { Field } from "formik";
import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const Input = styled(Field)`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  padding: 0 10px;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.backgroundLightGray};
  outline: none;
  border: 2px solid transparent;
  transition: all 0.5s;
  :focus,
  :hover {
    border: 2px solid ${(props: StyledTheme) => props.theme.colors.black};
  }
`;
