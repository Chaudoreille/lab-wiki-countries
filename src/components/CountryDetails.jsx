import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import CountryLink from './CountryLink';

const CountryDetails = () => {
  const { code } = useParams();
  const [currentCountry, setCurrentCountry] = useState();
  const [neighbors, setNeighbors] = useState([]);

  const countryFrom3Code = useCallback(async (cc3) => {
    try {
      const response = await fetch(
        `https://ih-countries-api.herokuapp.com/countries/${cc3}`
      );
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
      return {};
    }
  }, []);

  useEffect(() => {
    const loadCountry = async () => {
      try {
        const country = await countryFrom3Code(code);
        setCurrentCountry(country);
        country.borders.forEach(async (neighbor3Code) => {
          try {
            const neighbor = await countryFrom3Code(neighbor3Code);
            setNeighbors((neighbors) => [...neighbors, neighbor]);
          } catch (error) {
            console.error(error);
          }
        });
      } catch (error) {
        console.error(error);
      }
    };
    setNeighbors([]);
    loadCountry();
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
                {neighbors.map((neighbor) => {
                  return (
                    <li key={neighbor.alpha3Code}>
                      <CountryLink {...neighbor} />
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
