import { Routes, Route } from "react-router-dom";
import { routes } from "./Routes/Routes";
import MainTemplate from "./Template/MainTemplate";
import AddAnimalFormView from "./Views/AddAnimalFormView/AddAnimalFormView";
import AnimalsListView from "./Views/AnimalsListView/AnimalsListView";
import MainView from "./Views/MainView/MainView";

const App = () => {
  const { index, animalsList, addAnimalForm } = routes;
  return (
    <Routes>
      <Route element={<MainTemplate />}>
        <Route index path={index} element={<MainView />} />
        <Route path={animalsList} element={<AnimalsListView />} />
        <Route path={addAnimalForm} element={<AddAnimalFormView />} />
        <Route path={"*"} element={<MainView />} />
      </Route>
    </Routes>
  );
};

export default App;
