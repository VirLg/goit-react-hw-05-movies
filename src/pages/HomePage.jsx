import React from 'react';
import { createContext, useState, useEffect } from 'react';
import ItemCard from '../components/ItemCard/ItemCard';

import FetchCard from '../components/Api/Api';

export const RenderContext = createContext();

const HomePage = data => {
  const [filmList, setFilmList] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    FetchCard(`trending/all/day`)
      .then(data => data.json())
      .then(resp => getFormatingArray(resp))
      .catch(error => setError(error.message));
  }, [data]);

  const getFormatingArray = resp => {
    console.log(resp);
    const { results } = resp;
    if (results) {
      const stateArr = results.map(
        ({
          backdrop_path,
          genre_ids,
          id,
          media_type,
          original_title,
          overview,
          poster_path,
          title,
        }) => {
          return {
            backdrop_path,
            genre_ids,
            id,
            media_type,
            original_title,
            overview,
            poster_path,
            title,
          };
        }
      );
      console.log(stateArr);
      setFilmList(stateArr);
    }
  };

  return (
    <div>
      {error && <h1>{error}</h1>}

      <ItemCard arr={filmList} />
    </div>
  );
};

export default HomePage;
