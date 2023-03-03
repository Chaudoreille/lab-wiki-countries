import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import CountryLink from './CountryLink';

const CountryDetails = ({ countries }) => {
  const { code } = useParams();
  const [currentCountry, setCurrentCountry] = useState();

  const countryFrom3Code = useCallback(
    (c) => countries.find((entry) => entry.alpha3Code === c),
    [countries]
  );

  useEffect(() => {
    setCurrentCountry((current) => countryFrom3Code(code));
  }, [code, countryFrom3Code]);

  if (!currentCountry) {
    return <p>Loading</p>;
  }
  return (
    <div className="col-7">
      <h1>
        <CountryLink {...currentCountry} />
      </h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{currentCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {currentCountry.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {currentCountry.borders.map((neighborCode) => {
                  return (
                    <li key={neighborCode}>
                      <CountryLink {...countryFrom3Code(neighborCode)} />
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
