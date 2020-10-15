import React, { createContext, useState } from 'react';

export const PetContext = createContext();

export const PetProvider = (props) => {

    const [pet, setPet] = useState([
        {
            name: 'Toby',
            gender: 'Male',
            age: 3,
            type: 'dog',
            service: 'urgencies'
        },
        {
            name: 'Max',
            gender: 'Female',
            age: 2,
            type: 'cat',
            service: 'valoration'
        },
        {
            name: 'Jacob',
            gender: 'Male',
            age: 2,
            type: 'bird',
            service: 'urgencies'
        },
    ])

    return (
        <PetContext.Provider value={[pet, setPet]}>
            {props.children}
        </PetContext.Provider>
    )
}

