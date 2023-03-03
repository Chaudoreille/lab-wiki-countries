import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import countries from "./countries.json";

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ih-countries-api.herokuapp.com/countries');
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to="/countries" />} />
        <Route path="/countries" element={<CountriesList countries={data} />}>
          <Route path=":code" element={<CountryDetails countries={data} />} />
        </Route>
        <Route path='*' element={<h2>Error 404</h2>}></Route>
      </Routes>
      <footer></footer>
    </div>
  );
}

export default App;
