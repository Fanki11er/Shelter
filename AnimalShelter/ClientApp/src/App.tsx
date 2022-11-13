import { Routes, Route } from "react-router-dom";
import { routes } from "./Routes/Routes";
import MainTemplate from "./Template/MainTemplate";

const App = () => {
  const { index } = routes;
  return (
    <Routes>
      <Route element={<MainTemplate />}>
        <Route index path={index} element={<div>LandingPage</div>} />

        <Route path={"*"} element={<div>LandingPage</div>} />
      </Route>
    </Routes>
  );
};

export default App;
