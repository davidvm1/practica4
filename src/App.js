import React from "react";
import "./App.css";
import { PetProvider, PetContext } from "./contexts/PetContext";
import PetForm from "./components/PetForm";
import PetList from "./components/Petlist";

function App() {

  return (
    <PetProvider>
      <div className="App">
        <h1>Veterinary Clinic</h1>
        <PetForm />
        <PetList />
      </div>
    </PetProvider>
  );
}

export default App;
