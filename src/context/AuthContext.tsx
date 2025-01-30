//para compartir el estado de autenticación en toda la aplicación, vamos a utilizar el contexto de React.

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

enum AuthStatus {
  checking = "checking",
  authenticated = "authenticated",
  notAuthenticated = "notAuthenticated",
}

interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;
  isChecking: boolean;
}

interface User {
  name: string;
  email: string;
}

export const AuthContext = createContext({} as AuthState);

export const useAutContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState(AuthStatus.checking);

  useEffect(() => {
    setTimeout(() => {
      setStatus(AuthStatus.notAuthenticated);
    }, 1500);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        status: status,

        //getters
        isChecking: status === AuthStatus.checking,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
