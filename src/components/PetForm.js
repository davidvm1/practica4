import React, { useState, useContext } from "react";
import { PetContext } from "../contexts/PetContext";

const PetForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [type, setType] = useState("");
  const [service, setService] = useState("");

  const [pets, setPets] = useContext(PetContext);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  const handleServiceChange = (e) => {
    setService(e.target.value);
  };
  const addPet = (e) => {
    e.preventDefault();
    setPets((prevPets) => [
      ...prevPets,
      {
        name: name,
        gender: gender,
        age: age,
        type: type,
        service: service,
      },
    ]);
    setName("");
    setGender("");
    setAge(0);
    setType("");
    setService("");
  };

  return (
    <form autoComplete="off" onSubmit={addPet}>
      <label htmlFor="name">Pet Name:</label>
      <input
        value={name}
        onChange={handleNameChange}
        type="text"
        name="name"
        placeholder="Input you pet's name"
      />

      <label htmlFor="gender">Gender:</label>
      <input
        value={gender}
        onChange={handleGenderChange}
        list="gender"
        name="gender"
        placeholder="Choose a Gender"
      />
      <datalist id="gender">
        <option value="Male" />
        <option value="Female" />
      </datalist>

      <label htmlFor="age">Age:</label>
      <input
        value={age}
        onChange={handleAgeChange}
        type="number"
        name="age"
        placeholder="Input you pet's age"
      />

      <label htmlFor="type">Pet Type:</label>
      <input
        value={type}
        onChange={handleTypeChange}
        list="type"
        name="type"
        placeholder="Choose the type of your pet"
      />
      <datalist id="type">
        <option value="Dog" />
        <option value="Cat" />
        <option value="Hamster" />
        <option value="Bird" />
      </datalist>

      <label htmlFor="service">Service:</label>
      <input
        value={service}
        onChange={handleServiceChange}
        list="service"
        name="service"
        placeholder="Choose the type of your pet"
      />
      <datalist id="service">
        <option value="Assessment" />
        <option value="Emergencies" />
        <option value="Hospitalization" />
      </datalist>
      <button type="submit">Add Pet</button>
    </form>
  );
};

export default PetForm;
