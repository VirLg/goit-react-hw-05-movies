import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';

export const RenderContext = createContext();

const MovieDetailsPage = props => {
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
    };

    fetchOnlyCard();
  }, [movieId]);

  return (
    <div>
      <h1>{item.original_title}</h1>
      <img src={item.poster_path} alt={item.original_title} />
      <h2>{item.vote_count}</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Gallery</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default MovieDetailsPage;

/* */
