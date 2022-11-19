import { Routes, Route } from "react-router-dom";
import { routes } from "./Routes/Routes";
import MainTemplate from "./Template/MainTemplate";
import AnimalAdoptionView from "./Views/AnimalAdoptionView/AnimalAdoptionView";
import AnimalsListView from "./Views/AnimalsListView/AnimalsListView";
import LoginView from "./Views/LoginView/LoginView";
import MainView from "./Views/MainView/MainView";
import OptionsView from "./Views/OptionsView/OptionsView";
import RegistrationView from "./Views/RegistrationView/RegistrationView";
import StatisticsView from "./Views/StatisticsView/StatisticsView";

const App = () => {
  const {
    index,
    animalsList,
    registration,
    login,
    statistics,
    options,
    adoption,
  } = routes;
  return (
    <Routes>
      <Route element={<MainTemplate />}>
        <Route index path={index} element={<MainView />} />
        <Route path={animalsList} element={<AnimalsListView />} />
        <Route path={"*"} element={<MainView />} />
        <Route path={registration} element={<RegistrationView />} />
        <Route path={login} element={<LoginView />} />
        <Route path={statistics} element={<StatisticsView />} />
        <Route path={options} element={<OptionsView />} />
        <Route path={adoption} element={<AnimalAdoptionView />} />
      </Route>
    </Routes>
  );
};

export default App;
