import React from 'react'

interface Persona {
    name: string;
    lastName: string;
    age: number;
    address: Address;
}

interface Address {
    city: string;
    country: string;
    street?: string;
}

const ObjectLiterals = () => {
    const persona: Persona = {
        name: 'Kevin',
        lastName: 'Perez',
        age: 24,
        address: {
            city: 'Lima',
            country: 'Peru'
        }
    }

  return (
    <>  
        <h3>Object Literals</h3>
        <pre>
            {JSON.stringify(persona, null, 2)}
        </pre>
    </>
  )
}

export default ObjectLiterals
