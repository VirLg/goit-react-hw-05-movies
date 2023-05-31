import React from 'react';
import { createContext, useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import Api from 'components/Api/Api';

import ItemCard from '../ItemCard/ItemCard';
export const RenderContext = createContext();

const HomePage = () => {
  return <div>Home Page</div>;
};

export default HomePage;
