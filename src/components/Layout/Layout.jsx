import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Loyaut, Nav } from './Layout.styled';
const Layout = () => {
  return (
    <Loyaut>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </Nav>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Loyaut>
  );
};

export default Layout;
