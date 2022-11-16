import { Routes, Route } from "react-router-dom";
import { routes } from "./Routes/Routes";
import MainTemplate from "./Template/MainTemplate";
import AnimalsListView from "./Views/AnimalsListView/AnimalsListView";
import LoginView from "./Views/LoginView/LoginView";
import MainView from "./Views/MainView/MainView";
import RegistrationView from "./Views/RegistrationView/RegistrationView";

const App = () => {
  const { index, animalsList, registration, login } = routes;
  return (
    <Routes>
      <Route element={<MainTemplate />}>
        <Route index path={index} element={<MainView />} />
        <Route path={animalsList} element={<AnimalsListView />} />
        <Route path={"*"} element={<MainView />} />
        <Route path={registration} element={<RegistrationView />} />
        <Route path={login} element={<LoginView />} />
      </Route>
    </Routes>
  );
};

export default App;
