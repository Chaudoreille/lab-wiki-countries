import React from 'react';
import { Link } from 'react-router-dom';
import './CountriesList.css';
import { Outlet } from 'react-router-dom';

const CountriesList = (props) => {
  const { countries } = { ...props };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="list-group">
            {countries.map((country) => {
              const alpha2Code = country.alpha2Code?.toLowerCase();
              const smallPicUrl = `https://flagpedia.net/data/flags/icon/72x54/${alpha2Code}.png`;

              return (
                <Link
                  key={country.alpha3Code}
                  to={`${country.alpha3Code}`}
                  className="list-group-item list-group-item-action"
                >
                  <img src={smallPicUrl} alt={country.alpha2Code} />
                  <span>{country.name.common}</span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="col">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default CountriesList;
