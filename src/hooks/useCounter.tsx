import React from "react";

//This is a custom hook
const useCounter = () => {
  const [count, setCount] = React.useState(10);
  const increaseBy = (num: number): void => {
    // setCount(count + num);
    // setCount((current) => current + num);
    setCount(Math.max(count + num, 0)); // No permitir que el contador sea negativo
  };

  return {
    //propiedades
    count,

    //acciones
    increaseBy,
  };
};

export default useCounter;
