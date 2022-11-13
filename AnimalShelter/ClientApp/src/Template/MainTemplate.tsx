import { MainTemplateWrapper } from "./MainTemplate.styles";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Molecules/Footer/Footer";

const MainTemplate = () => {
  return (
    <MainTemplateWrapper>
      <Outlet />
      <Footer />
    </MainTemplateWrapper>
  );
};

export default MainTemplate;
