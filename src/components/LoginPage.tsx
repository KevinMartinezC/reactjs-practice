import React from "react";
import { useAutContext } from "../context/AuthContext";

const LoginPage = () => {
  const { isChecking, isAuthenticated, logginWithEmailPassword, logout, user } =
    useAutContext();

  if (isChecking) {
    return <h3>Verificando...</h3>;
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <h3>Bienvenido</h3>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <button
            onClick={logout}
            className="bg-blue-500 p-2 text-white rounded-xl mt-2"
          >
            Salir
          </button>
        </>
      ) : (
        <>
          <h3>Ingresar a la aplicación</h3>
          <button
            onClick={() =>
              logginWithEmailPassword("kevinceron@gmail.com", "123456")
            }
            className="bg-blue-500 p-2 text-white rounded-xl mt-2"
          >
            Ingresar
          </button>
        </>
      )}
    </>
  );
};

export default LoginPage;
