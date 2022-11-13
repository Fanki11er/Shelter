import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route element={<div></div>}>
        <Route index path={"/"} element={<div>LandingPage</div>} />

        <Route path={"*"} element={<div>LandingPage</div>} />
      </Route>
    </Routes>
  );
};

export default App;
