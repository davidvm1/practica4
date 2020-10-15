import React, { useState } from "react";

const PetForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [type, setType] = useState("");
  const [service, setService] = useState("");

  return (
    <form autoComplete="off">
      <input type="text" name="name" placeholder="Input you pet's name" />
      <input list="gender" placeholder="Choose a Gender" />
      <datalist id="gender">
        <option value="Male" />
        <option value="Female" />
      </datalist>
      <input type="number" name="age" placeholder="Input you pet's age" />
      <input list="type" placeholder="Choose the type of your pet" />
      <datalist id="type">
        <option value="Dog" />
        <option value="Cat" />
        <option value="Hamster" />
        <option value="Bird" />
      </datalist>
      <input list="service" placeholder="Choose the type of your pet" />
      <datalist id="service">
        <option value="Assessment" />
        <option value="Emergencies" />
        <option value="Hospitalization" />
      </datalist>
    </form>
  );
};

export default PetForm;
