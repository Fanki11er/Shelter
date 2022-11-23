import { Form } from "formik";
import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const AddAnimalFormWrapper = styled(Form)`
  width: 1100px;
  height: auto;
  display: grid;
  grid-template-columns: 300px 300px 400px;
  grid-row-gap: 40px;
  padding: 50px;
  background-image: linear-gradient(
    ${(props: StyledTheme) => props.theme.gradients.mainPinkGRadient}
  );
  margin: 50px 0;
  border-radius: 15px;
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.inter};
`;

export const LeftInputsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: auto;
  grid-row-gap: 15px;
  justify-items: flex-start;
`;

export const RightInputsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: auto;
  grid-row-gap: 60px;
  justify-items: flex-start;
  grid-column: 3/4;
`;

export const CheckboxGroupWrapper = styled.div`
  width: 800px;
  height: 200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 5px;
  justify-items: flex-end;
  align-content: center;
  justify-self: center;
  padding: 15px 10px;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.backgroundLightGray};
  border-radius: 10px;
  grid-column: 1 /4;
`;

export const SubmitButtonWrapper = styled.div`
  width: 50%;
  height: auto;
  display: grid;
  justify-content: center;
  justify-self: center;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  grid-column: 1/4;
`;

export const AddPhotoWrapper = styled.div`
  width: fit-content;
  height: auto;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 40px;
  grid-row-gap: 30px;
  justify-self: flex-end;
  justify-items: center;
`;

export const PhotoPreviewPlaceholder = styled.div`
  width: 220px;
  height: 220px;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.backgroundLightGray};
  border-radius: 10px;
  display: flex;
  justify-self: flex-end;
`;

export const PhotoPreview = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 10px;
  display: flex;
  justify-self: flex-end;
`;

export const AddAnimalFormHeader = styled.h2`
  grid-column: 1/4;
  justify-self: center;
`;

export const NumberFieldsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-row-gap: 30px;
  grid-template-columns: 100%;
  grid-auto-rows: 80px;
  justify-items: flex-end;
  grid-column: 2/3;
  align-items: flex-start;
  padding: 10px 0;
`;
