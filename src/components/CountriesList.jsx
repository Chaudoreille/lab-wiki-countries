import React from 'react';
import CountryLink from './CountryLink';
import { Outlet } from 'react-router-dom';

const CountriesList = (props) => {
  const { countries } = { ...props };

  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <div className="list-group">
            {countries.map((country) => (
              <CountryLink key={country.alpha3Code} {...country} />
            ))}
          </div>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default CountriesList;
