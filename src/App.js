import React from "react";
import "./App.css";
import { PetProvider } from "./contexts/PetContext";
import PetForm from "./components/PetForm";
import PetList from "./components/Petlist";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: 50px;
  color: #007ea7;
`;

function App() {
  return (
    <PetProvider>
      <div className="App">
        <StyledH1>Veterinary Clinic</StyledH1>
        <PetForm />
        <PetList />
      </div>
    </PetProvider>
  );
}

export default App;
