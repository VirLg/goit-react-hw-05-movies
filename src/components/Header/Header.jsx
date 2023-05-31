import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <div className="film__colection">
        <NavLink to="/movies">Home</NavLink>

        <NavLink to="search">Movies</NavLink>
      </div>
    </nav>
  );
};

export default Header;
