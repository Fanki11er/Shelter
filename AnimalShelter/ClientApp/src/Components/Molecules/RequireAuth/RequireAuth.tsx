import { Outlet, Navigate } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import { routes } from "../../../Routes/Routes";

const RequireAuth = () => {
  const { auth } = useAuth();
  const { index } = routes;
  return auth?.accessToken ? <Outlet /> : <Navigate to={index} />;
};

export default RequireAuth;
