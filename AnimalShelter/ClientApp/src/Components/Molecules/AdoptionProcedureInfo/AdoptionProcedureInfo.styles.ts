import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const AdoptionProcedureInfoWrapper = styled.section`
  width: 100%;
  height: auto;
  background-image: linear-gradient(
    ${(props: StyledTheme) => props.theme.gradients.mainPinkGradientReversed}
  );
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: 15px;
  margin: 30px 0;
  padding: 40px 0;
  border-radius: 15px;
`;

export const AdoptionProcedureInfoArticle = styled.article`
  width: 800px;
  display: flex;
  padding: 0;
  flex-direction: column;
  justify-self: center;
  margin: 0;
  background-color: transparent;
`;

export const AdoptionProcedureInfoArticleHeader = styled.h3`
  display: flex;
  justify-self: flex-start;
  margin: 0;
`;

export const AdoptionProcedureInfoArticleParagraph = styled.p`
  text-align: start;
`;

export const AdoptionProcedureInfoArticleParagraphBold = styled(
  AdoptionProcedureInfoArticleParagraph
)`
  font-weight: bold;
`;
