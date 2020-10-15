import React from "react";

const Pet = ({ name, gender, age, type, service }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{gender}</td>
      <td>{age}</td>
      <td>{type}</td>
      <td>{service}</td>
    </tr>
  );
};

export default Pet;
