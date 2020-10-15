import React, { useContext, useEffect } from "react";
import Pet from "./Pet";
import { PetContext } from "../contexts/PetContext";
import styled from "styled-components";

const StyledTable = styled.table`
  background-color: #e3e3e3;
  margin: 50px auto;
  width: 70%;

  thead {
    color: white;
    background: #007ea7;

    th {
      height: 40px;
    }
  }
`;

const Petlist = () => {
  const [pets, setPets] = useContext(PetContext);

  return (
    <StyledTable>
      <thead>
        <th>Pet Name</th>
        <th>Gender</th>
        <th>Age</th>
        <th>Pet Type</th>
        <th>Service</th>
      </thead>
      <tbody>
        {pets.map((pet) => (
          <Pet
            name={pet.name}
            gender={pet.gender}
            age={pet.age}
            type={pet.type}
            service={pet.service}
          />
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Petlist;
