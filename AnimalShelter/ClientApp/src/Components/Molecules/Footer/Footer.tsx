import {
  FooterAuthorSpan,
  FooterAuthorsWrapper,
  FooterIconWrapper,
  FooterImage,
  FooterWrapper,
  FooterYearSpan,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterIconWrapper>
        <FooterImage />
        <FooterYearSpan>2022</FooterYearSpan>
      </FooterIconWrapper>
      <FooterAuthorsWrapper>
        <FooterAuthorSpan>Ewelina Woińska</FooterAuthorSpan>
        <FooterAuthorSpan>Krzysztof Dziedzic</FooterAuthorSpan>
        <FooterAuthorSpan>Marcin Bielak</FooterAuthorSpan>
      </FooterAuthorsWrapper>
    </FooterWrapper>
  );
};

export default Footer;
