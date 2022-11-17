import styled from "styled-components";
import { StyledTheme } from "../GlobalStyles/theme";

export const MainTemplateWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: 65px 1fr 65px;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.backgroundLightGray};
`;
