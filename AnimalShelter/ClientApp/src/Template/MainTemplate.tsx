import { MainTemplateWrapper } from "./MainTemplate.styles";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Molecules/Footer/Footer";
import Navigation from "../Components/Molecules/Navigation/Navigation";

const MainTemplate = () => {
  return (
    <MainTemplateWrapper>
      <Navigation />
      <Outlet />
      <Footer />
    </MainTemplateWrapper>
  );
};

export default MainTemplate;
