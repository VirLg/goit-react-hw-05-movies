import React from 'react';
import { createContext, useState, useEffect } from 'react';
import ItemCard from '../components/ItemCard/ItemCard';
import { useParams, useSearchParams } from 'react-router-dom';
import FetchCard from '../components/Api/Api';

export const RenderContext = createContext();

const Movies = data => {
  const [filmList, setFilmList] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  useEffect(() => {
    FetchCard(`search/movie`)
      .then(data => data.json())
      .then(resp => setSearch(resp))
      .catch(error => setError(error.message));
  }, [data]);

  const [searchParams, setSearchParams] = useSearchParams();
  const updateInput = evt => {
    if (evt.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: evt.target.value });
  };
  const movieId = searchParams.get('movieId') ?? '';
  return (
    <div>
      {error && <h1>{error}</h1>}
      <RenderContext.Provider
        value={{
          filmList,
          movieId,
        }}
      >
        <input type="text" onChange={updateInput} />
      </RenderContext.Provider>
    </div>
  );
};

export default Movies;

/*  */
// const fetchCard = async () => {
//   if (trigger) {
//     try {
//       const data = await fetch(
//         'https://api.themoviedb.org/3/trending/all/day?api_key=d0d7894e72847cf4bdccbd92204adc61'
//       );
//       if (data.status !== 200) {
//         return Promise.reject(new Error('Search is empty'));
//       } else {
//         const resp = await data.json();
//         return await getFormatingArray(resp);
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   }
// };
