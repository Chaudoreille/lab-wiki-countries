import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = (props) => {
  const { code } = useParams();

  console.log(code);

  return (
    <div>
      <h2>{code}</h2>
    </div>
  );
};

export default CountryDetails;
