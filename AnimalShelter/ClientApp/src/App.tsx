import { Routes, Route } from "react-router-dom";
import MainTemplate from "./Template/MainTemplate";

const App = () => {
  return (
    <Routes>
      <Route element={<MainTemplate />}>
        <Route index path={"/"} element={<div>LandingPage</div>} />

        <Route path={"*"} element={<div>LandingPage</div>} />
      </Route>
    </Routes>
  );
};

export default App;
