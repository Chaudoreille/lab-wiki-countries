import React from 'react';
import { Link } from 'react-router-dom';

const CountryLink = ({ alpha2Code, alpha3Code, name }) => {
  const smallPicUrl = `https://flagpedia.net/data/flags/icon/72x54/${alpha2Code?.toLowerCase()}.png`;
  return (
    <Link
      to={`/countries/${alpha3Code}`}
      className="list-group-item list-group-item-action"
    >
      <img src={smallPicUrl} alt={alpha2Code} />
      <span>{name.common}</span>
    </Link>
  );
};

export default CountryLink;
