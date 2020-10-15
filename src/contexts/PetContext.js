import React, { createContext, useEffect, useState } from "react";

export const PetContext = createContext();

export const PetProvider = (props) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    if (pets.length > 0) {
      localStorage.setItem("pets", JSON.stringify(pets));
    }
  }, [pets]);

  useEffect(() => {
    if (localStorage.getItem("pets") !== null) {
      let storedPets = JSON.parse(localStorage.getItem("pets"));
      setPets([...storedPets]);
    }
  }, []);

  return (
    <PetContext.Provider value={[pets, setPets]}>
      {props.children}
    </PetContext.Provider>
  );
};
