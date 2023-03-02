import './App.css';
import { Route, Routes } from 'react-router-dom';
import countries from "./countries.json";

import Layout from './components/Layout';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path='/'></Route>
          <Route path="/countries" element={<CountriesList />}>
            <Route path=":code" element={<CountryDetails />} />
          </Route>
          <Route path='*' element={<h2>Error 404</h2>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
