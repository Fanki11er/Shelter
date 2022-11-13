import { Routes, Route } from "react-router-dom";
import { routes } from "./Routes/Routes";
import MainTemplate from "./Template/MainTemplate";
import MainView from "./Views/MainView/MainView";

const App = () => {
  const { index } = routes;
  return (
    <Routes>
      <Route element={<MainTemplate />}>
        <Route index path={index} element={<MainView />} />

        <Route path={"*"} element={<MainView />} />
      </Route>
    </Routes>
  );
};

export default App;
