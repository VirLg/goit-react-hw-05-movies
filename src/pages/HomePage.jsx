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
      <RenderContext.Provider
        value={{
          filmList,
        }}
      >
        <ItemCard />
      </RenderContext.Provider>
    </div>
  );
};

export default HomePage;

{
  /* <input type="text" onChange={updateInput} />
const [searchParams, setSearchParams] = useSearchParams();
  const updateInput = evt => {
    if (evt.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: evt.target.value });
  };
  const movieId = searchParams.get('movieId') ?? ''; */
}
// ========================================

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

// import React from 'react';
// import { createContext, useState, useEffect } from 'react';
// import ItemCard from '../components/ItemCard/ItemCard';
// import Api from 'components/Api/Api';

// export const RenderContext = createContext();

// const HomePage = () => {
//   const [filmList, setFilmList] = useState([]);
//   // // const BASE_URL = 'https://api.themoviedb.org/3/movie/550?';
//   // // const API_KEY = 'd0d7894e72847cf4bdccbd92204adc61';
//   // // const ENDPOINT = 'trending/all/{time_window}';
//   const [trigger, setTrigger] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCard = async () => {
//       if (trigger) {
//         try {
//           const data = await fetch(
//             'https://api.themoviedb.org/3/trending/all/day?api_key=d0d7894e72847cf4bdccbd92204adc61'
//           );
//           if (data.status !== 200) {
//             return Promise.reject(new Error('Search is empty'));
//           } else {
//             const resp = await data.json();
//             return await getFormatingArray(resp);
//           }
//         } catch ({ error }) {
//           setError(error);
//         }
//       }
//     };
//     fetchCard();
//   }, [trigger]);

//   const getFormatingArray = resp => {
//     const { results } = resp;

//     if (results !== undefined) {
//       const stateArr = results.map(
//         ({
//           backdrop_path,
//           genre_ids,
//           id,
//           media_type,
//           original_title,
//           overview,
//           poster_path,
//           title,
//         }) => {
//           return {
//             backdrop_path,
//             genre_ids,
//             id,
//             media_type,
//             original_title,
//             overview,
//             poster_path,
//             title,
//           };
//         }
//       );
//       console.log(stateArr);
//       setFilmList(stateArr);
//     }
//   };
//   return (
//     <div>
//       <RenderContext.Provider value={filmList}>
//         <input type="text" />
//         <ItemCard />
//       </RenderContext.Provider>
//     </div>
//   );
// };

// export default HomePage;
