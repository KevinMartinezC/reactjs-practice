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
  isAuthenticated: boolean;
  logginWithEmailPassword: (email: string, password: string) => void;
  logout: () => void;
}

interface User {
  name: string;
  email: string;
}

export const AuthContext = createContext({} as AuthState);

export const useAutContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState(AuthStatus.checking);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setTimeout(() => {
      setStatus(AuthStatus.notAuthenticated);
    }, 1500);
  }, []);

  const logginWithEmailPassword = (email: string, password: string) => {
    console.log(password);
    setUser({
      name: "Kevin Martinez ",
      email: email,
    });
    setStatus(AuthStatus.authenticated);
  };

  const logout = () => {
    setUser(undefined);
    setStatus(AuthStatus.notAuthenticated);
  };

  return (
    <AuthContext.Provider
      value={{
        status: status,
        user: user,

        //getters
        isChecking: status === AuthStatus.checking,
        isAuthenticated: status === AuthStatus.authenticated,
        logginWithEmailPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
