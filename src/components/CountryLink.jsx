import React from 'react';
import { Link } from 'react-router-dom';

const CountryLink = ({ alpha2Code, alpha3Code, name, customClass }) => {
  const smallPicUrl = `https://flagpedia.net/data/flags/icon/72x54/${alpha2Code?.toLowerCase()}.png`;
  return (
    <Link
      className={
        customClass ||
        'text-decoration-none mb-0 d-flex justify-content-start align-items-center'
      }
      to={`/countries/${alpha3Code}`}
    >
      <img className="mx-4" src={smallPicUrl} alt={alpha2Code} />
      <span className="py-3 text-dark">{name.common}</span>
    </Link>
  );
};

export default CountryLink;
