import React from 'react';

import { useParams } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';
import ItemCard from '../ItemCard/ItemCard';
export const RenderContext = createContext();

const MovieDetailsPage = props => {
  const [trigger, stateTrigger] = useState(true);

  const [error, setError] = useState(null);
  const [item, setItem] = useState({});
  const { movieId } = useParams();

  // setMovieItemId(params.movieId);
  // console.log(params.movieId);

  useEffect(() => {
    const options = { method: 'GET', headers: { accept: 'application/json' } };
    const fetchOnlyCard = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=d0d7894e72847cf4bdccbd92204adc61&language=en-US`,
        options
      )
        .then(response => response.json())
        .then(response => setItem(response))
        .catch(err => console.error(err));
      // const fetchOnlyCard = async () => {
      //   try {
      //     const data = await fetch(
      //       fetch(
      //         `https://api.themoviedb.org/3/movie/${movieId}?api_key=d0d7894e72847cf4bdccbd92204adc61`
      //       )
      //     );

      //     if (data.status !== 200) {
      //       console.log(data);
      //       return Promise.reject(new Error('Search is empty'));
      //     } else {
      //       const resp = await data.json();

      //       await getFormatingItem(resp);
      //     }
      //   } catch ({ error }) {
      //     setError(error);
      //   }
    };

    fetchOnlyCard();
  }, [movieId]);

  // const getFormatingItem = ({ original_title, poster_path, vote_count }) => {
  //   console.log(original_title);
  // const { results } = resp;
  // console.log(results);
  // if (results !== undefined) {
  //   const stateArr = results.map(
  //     ({
  //       backdrop_path,
  //       genre_ids,
  //       id,
  //       media_type,
  //       original_title,
  //       overview,
  //       poster_path,
  //       title,
  //     }) => {
  //       return {
  //         backdrop_path,
  //         genre_ids,
  //         id,
  //         media_type,
  //         original_title,
  //         overview,
  //         poster_path,
  //         title,
  //       };
  //   }
  // );
  // console.log(stateArr);

  return (
    <div>
      <h1>{item.original_title}</h1>
      <img src={item.poster_path} alt={item.original_title} />
      <h2>{item.vote_count}</h2>
    </div>
  );
};
export default MovieDetailsPage;

/* */
