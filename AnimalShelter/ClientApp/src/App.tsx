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
import AdoptionsHistoryViewW from "./Views/AdoptionsHistoryView/AdoptionsHistoryView";
import RequireAuth from "./Components/Molecules/RequireAuth/RequireAuth";
import AuthProvider from "./Providers/AuthProvider";

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
    adoptionsHistory,
  } = routes;
  return (
    <AuthProvider>
      <Routes>
        <Route element={<MainTemplate />}>
          <Route index path={index} element={<MainView />} />
          <Route path={animalsList} element={<AnimalsListView />} />
          <Route path={login} element={<LoginView />} />
          <Route path={registration} element={<RegistrationView />} />
          <Route element={<RequireAuth />}>
            <Route path={addAnimalForm} element={<AddAnimalFormView />} />
            <Route path={statistics} element={<StatisticsView />} />
            <Route path={options} element={<OptionsView />} />
            <Route path={adoption} element={<AnimalAdoptionView />} />
            <Route path={addCandidateForm} element={<AddCandidateView />} />
            <Route
              path={adoptionsHistory}
              element={<AdoptionsHistoryViewW />}
            />
          </Route>

          <Route path={"*"} element={<MainView />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
