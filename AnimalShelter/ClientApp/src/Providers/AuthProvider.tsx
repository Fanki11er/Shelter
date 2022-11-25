import React, { createContext, PropsWithChildren, useState } from "react";
import { AuthUser } from "../Types/types";

interface AuthContextInterface {
  setAuth: React.Dispatch<React.SetStateAction<AuthUser | null>>;
  auth: AuthUser | null;
}

export const AuthContext = createContext<AuthContextInterface>({
  setAuth: () => {},
  auth: {
    id: 0,
    name: "",
    accessToken: "",
  },
});

const AuthProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [auth, setAuth] = useState<AuthUser | null>(null);

  const context = {
    auth,
    setAuth,
  };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
