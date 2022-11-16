import { Routes, Route } from "react-router-dom";
import { routes } from "./Routes/Routes";
import MainTemplate from "./Template/MainTemplate";
import AnimalsListView from "./Views/AnimalsListView/AnimalsListView";
import MainView from "./Views/MainView/MainView";

const App = () => {
  const { index, animalsList } = routes;
  return (
    <Routes>
      <Route element={<MainTemplate />}>
        <Route index path={index} element={<MainView />} />
        <Route path={animalsList} element={<AnimalsListView />} />
        <Route path={"*"} element={<MainView />} />
      </Route>
    </Routes>
  );
};

export default App;
