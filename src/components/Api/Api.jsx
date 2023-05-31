// import { useState } from 'react';

// const FetchCard = async () => {
//   const [error, setError] = useState(null);
//   const [trigger, setTrigger] = useState(true);
//   if (trigger) {
//     try {
//       const data = await fetch(
//         'https://api.themoviedb.org/3/trending/all/day?api_key=d0d7894e72847cf4bdccbd92204adc61'
//       );
//       if (data.status !== 200) {
//         return Promise.reject(new Error('Search is empty'));
//       } else {
//         const resp = await data.json();
//         return await resp;
//       }
//     } catch ({ error }) {
//       setError(error);
//     }
//   }
// };

// export default FetchCard;
// =================================================
// import { createContext, useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import Api from 'components/Api/Api';

// import ItemCard from '../ItemCard/ItemCard';
// export const RenderContext = createContext();

// const HomePage = resp => {
//   console.log(resp);
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
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       <RenderContext.Provider value={filmList}>
//         <ItemCard />
//       </RenderContext.Provider>
//     </div>
//   );
// };

// export default HomePage;
