import React, { useContext } from "react";
import Pet from "./Pet";
import { PetContext } from "../contexts/PetContext";

const Petlist = () => {
  const [pets, setPets] = useContext(PetContext);

  return (
    <table>
      <tr>
        <th>Pet Name</th>
        <th>Gender</th>
        <th>Age</th>
        <th>Pet Type</th>
        <th>Service</th>
      </tr>
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          gender={pet.gender}
          age={pet.age}
          type={pet.type}
          service={pet.service}
        />
      ))}
    </table>
  );
};

export default Petlist;
