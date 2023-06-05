import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import { Loyaut, Nav, A } from './Layout.styled';
const Layout = () => {
  const location = useLocation();
  return (
    <Loyaut>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </Nav>
      <main>
        <Outlet />
      </main>
    </Loyaut>
  );
};

export default Layout;
