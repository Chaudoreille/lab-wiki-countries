import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import CountryLink from './CountryLink';
import FilterOptions from './FilterOptions';

const CountriesList = (props) => {
  const { countries } = { ...props };
  const [display, setDisplay] = useState([]);
  const [firstLetter, setFirstLetter] = useState();

  const alpharray = () => {
    const alpha = [];
    for (let i = 65; i < 65 + 26; i++) {
      alpha.push(String.fromCharCode(i));
    }
    return alpha;
  };

  const setSorted = (countryList) => {
    setDisplay(
      countryList.sort((a, b) =>
        a.name.common === b.name.common
          ? 0
          : a.name.common < b.name.common
          ? -1
          : 1
      )
    );
  };

  useEffect(() => {
    if (firstLetter) {
      const list = countries.filter(
        (country) =>
          country.name.common[0].toLowerCase() === firstLetter[0].toLowerCase()
      );
      return setSorted(list);
    }
    return setSorted(countries);
  }, [firstLetter, countries]);

  useEffect(() => {
    setSorted(countries);
  }, [countries]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <FilterOptions setVariable={setFirstLetter}>
            {alpharray()}
          </FilterOptions>
          <div className="list-group">
            {display.map((country) => (
              <div className="list-group-item" key={country.alpha3Code}>
                <CountryLink {...country} />
              </div>
            ))}
          </div>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default CountriesList;
