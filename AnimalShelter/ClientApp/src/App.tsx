import { Routes, Route } from "react-router-dom";
import { routes } from "./Routes/Routes";
import MainTemplate from "./Template/MainTemplate";
import AnimalAdoptionView from "./Views/AnimalAdoptionView/AnimalAdoptionView";
import AddAnimalFormView from "./Views/AddAnimalFormView/AddAnimalFormView";
import AnimalsListView from "./Views/AnimalsListView/AnimalsListView";
import LoginView from "./Views/LoginView/LoginView";
import MainView from "./Views/MainView/MainView";
import OptionsView from "./Views/OptionsView/OptionsView";
import RegistrationView from "./Views/RegistrationView/RegistrationView";
import StatisticsView from "./Views/StatisticsView/StatisticsView";
import AddCandidateView from "./Views/AddCandidateView/AddCandidateView";

const App = () => {
  const {
    index,
    animalsList,
    registration,
    login,
    statistics,
    options,
    adoption,
    addAnimalForm,
    addCandidateForm,
  } = routes;
  return (
    <Routes>
      <Route element={<MainTemplate />}>
        <Route index path={index} element={<MainView />} />
        <Route path={animalsList} element={<AnimalsListView />} />
        <Route path={addAnimalForm} element={<AddAnimalFormView />} />
        <Route path={registration} element={<RegistrationView />} />
        <Route path={login} element={<LoginView />} />
        <Route path={statistics} element={<StatisticsView />} />
        <Route path={options} element={<OptionsView />} />
        <Route path={adoption} element={<AnimalAdoptionView />} />
        <Route path={addCandidateForm} element={<AddCandidateView />} />
        <Route path={"*"} element={<MainView />} />
      </Route>
    </Routes>
  );
};

export default App;
