import React from 'react';
import { useState, useEffect } from 'react';
import ItemCard from '../components/ItemCard/ItemCard';
import FetchCard from '../Api/Api';

const HomePage = () => {
  const [filmList, setFilmList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    FetchCard(`trending/movie/day`)
      .then(resp => getFormatingArray(resp))
      .catch(error => setError(error.message));
  }, []);

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
