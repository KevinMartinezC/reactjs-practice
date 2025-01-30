import React from 'react'

const addTwoNumbers = (a: number, b: number)  => {
        return a + b;
}

const BasicFuntions = () => {

  return (
    <>
        <h3>Funciones Basicas</h3>
        <p>El resultado es {addTwoNumbers(5, 5)}</p>
    </>
  )
}

export default BasicFuntions
