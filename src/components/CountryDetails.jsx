import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const { code } = useParams();
  const { countries } = props;
  const [currentCountry, setCurrentCountry] = useState();

  const countryFrom3Code = useCallback(
    (c) => countries.find((entry) => entry.alpha3Code === c),
    [countries]
  );

  useEffect(() => {
    console.log('ASV', code);
    setCurrentCountry((current) => countryFrom3Code(code));
  }, [code, countryFrom3Code]);

  console.log('currentCountry', currentCountry);
  if (!currentCountry) {
    return <p>Loading</p>;
  }
  return (
    <div className="col-7">
      <h1>{currentCountry.name.common}</h1>
      <table class="table">
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
                {currentCountry.borders.map((neighbor) => (
                  <li key={neighbor}>
                    <Link to={neighbor}>
                      {countryFrom3Code(neighbor).name.common}
                    </Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
