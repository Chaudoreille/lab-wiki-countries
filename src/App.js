import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import countries from "./countries.json";

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to="/countries" />} />
        <Route path="/countries" element={<CountriesList countries={countries} />}>
          <Route path=":code" element={<CountryDetails countries={countries} />} />
        </Route>
        <Route path='*' element={<h2>Error 404</h2>}></Route>
      </Routes>
      <footer></footer>
    </div>
  );
}

export default App;
