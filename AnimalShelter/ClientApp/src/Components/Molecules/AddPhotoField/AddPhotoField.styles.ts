import { Field } from "formik";
import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

/*export const AddPhotoFieldWrapper = styled.div`
  width: 160px;
  height: 40px;
  border-radius: 5px;
  // background-color: ${(props: StyledTheme) => props.theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
`;*/

export const AddPhotoFieldInput = styled(Field)`
  visibility: hidden;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const AddPhotoFieldLabel = styled.label`
  color: ${(props: StyledTheme) => props.theme.colors.white};
  position: relative;
  width: 160px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  background-color: ${(props: StyledTheme) => props.theme.colors.black};
  :hover {
    color: ${(props: StyledTheme) => props.theme.colors.orange};
  }
`;
