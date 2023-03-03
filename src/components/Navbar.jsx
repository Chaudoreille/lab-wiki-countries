import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ home }) => {
  return (
    <nav className="p-5 bg-black mb-5">
      <Link to={home} className="text-light text-decoration-none">
        <h1>LAB - WikiCountries</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
