import React from "react";

interface CountryCardProps {
  name: string;
  code: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ name, code }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Code: {code}</p>
    </div>
  );
};

export default CountryCard;