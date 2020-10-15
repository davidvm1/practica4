import React, { useState, useContext } from "react";
import { PetContext } from "../contexts/PetContext";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  padding: 20px;
  border-radius: 20px;
  background: #eff4f9;
  border: 2px solid #2f2f2f;
  width: 40%;
  box-shadow: 4px 3px 5px -3px rgba(135, 128, 135, 0.93);
  margin: 0 auto;
`;

const StyledLabel = styled.label`
  color: #007ea7;
  font-size: 1.2rem;
  font-weight: 600;
`;

const StyledInput = styled.input`
  width: 50%;
  height: 30px;
  border: 0.2px solid gray;
  padding-left: 10px;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  background: #007ea7;
  color: white;
  border: none;
  height: 40px;
  width: 20%;
  margin: 10px;
  font-size: 1.1rem;
  border-radius: 3px;
`;

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
    <StyledForm autoComplete="off" onSubmit={addPet}>
      <StyledLabel htmlFor="name">Pet Name:</StyledLabel>
      <StyledInput
        required
        value={name}
        onChange={handleNameChange}
        type="text"
        name="name"
        placeholder="Input you pet's name"
      />

      <StyledLabel htmlFor="gender">Gender:</StyledLabel>
      <StyledInput
        required
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

      <StyledLabel htmlFor="age">Age:</StyledLabel>
      <StyledInput
        required
        value={age}
        onChange={handleAgeChange}
        type="number"
        name="age"
        placeholder="Input you pet's age"
      />

      <StyledLabel htmlFor="type">Pet Type:</StyledLabel>
      <StyledInput
        required
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

      <StyledLabel htmlFor="service">Service:</StyledLabel>
      <StyledInput
        required
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
      <StyledButton type="submit">Add Pet</StyledButton>
    </StyledForm>
  );
};

export default PetForm;
