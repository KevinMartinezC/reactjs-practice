import React from 'react'

const BasicTypes = () => {
    const name = 'Kevin';
    const age = 24;
    const isActive = true;
    const powers: string[] = ['Velocidad', 'Volar', 'Super Fuerza'];
  return (
    <>
        <h3>Tipos Basicos</h3>
        {name} - {age} - {isActive ? 'Activo' : 'Inactivo'}
        <p>{powers.join(', ')}</p>
    </>
  )
}

export default BasicTypes
