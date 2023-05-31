import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Loyaut } from './Layout.styled';
const Layout = () => {
  return (
    <Loyaut>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </Loyaut>
  );
};

export default Layout;
