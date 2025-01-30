import React from "react";
import { useAutContext } from "../context/AuthContext";

const LoginPage = () => {
  const { isChecking } = useAutContext();

  if (isChecking) {
    return <h3>Verificando...</h3>;
  }
  
  return (
    <>
      <h3>Login</h3>
    </>
  );
};

export default LoginPage;
