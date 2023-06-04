import { Link, useParams, useSearchParams } from 'react-router-dom';
import FetchSearchCard from 'components/Api/ApiSearch';
import { createContext, useState } from 'react';
import ItemCard from 'components/ItemCard/ItemCard';
export const RenderContext = createContext();
const Movies = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const updateInput = evt => {
    if (evt.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieInput: evt.target.value });
  };
  const movieInput = searchParams.get('movieInput') ?? '';

  const handleSubmit = evt => {
    evt.preventDefault();
    FetchSearchCard(movieInput)
      .then(data => data.json())
      .then(resp => setSearch(resp.results))
      .catch(error => setError(error.message));
  };
  console.log(search);
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          placeholder="Search images and photos"
          onChange={updateInput}
        />
      </form>
      <ItemCard arr={search} />
    </>
  );
};

{
  /* <ul>
{search &&
  search.map(({ original_title, id }) => {
    return (
      <li key={id}>
        <Link>{original_title}</Link>
      </li>
    );
  })}
</ul> */
}

// import React from 'react';
// import { createContext, useState, useEffect, useCallback } from 'react';

// import { useParams, useSearchParams } from 'react-router-dom';

// export const RenderContext = createContext();

// const Movies = () => {
//   const [error, setError] = useState(null);
//   const [search, setSearch] = useState('');

//   const [searchParams, setSearchParams] = useSearchParams();
//   const updateInput = evt => {
//     if (evt.target.value === '') {
//       return setSearchParams({});
//     }
//     setSearchParams({ movieInput: evt.target.value });
//   };
//   const movieInput = searchParams.get('movieInput') ?? '';
//   console.log(movieInput);
//   const handleSubmit = () => {
//     fetch(
//       `https://api.themoviedb.org/3/search/movie?query=${movieInput}&api_key=d0d7894e72847cf4bdccbd92204adc61&include_adult=false&language=en-US&page=1`
//     )
//       .then(data => data.json())
//       .then(resp => setSearch(resp))
//       .catch(error => setError(error.message));
//   };
//   console.log(search);

//   console.log(search);
//   return (
//     <div>
//       {error && <h1>{error}</h1>}
//       <input type="text" onChange={updateInput} />
//       <button type="submit" onSubmit={handleSubmit}>
//         Submit
//       </button>
//       <ul>
//         {search && search.map(el => console.log(el))}
//         <li>
//           <img src="" alt="" />
//         </li>
//       </ul>
//       }
//     </div>
//   );
// };

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
