import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FetchCard from 'components/Api/Api';
import { ImgCard } from './MoviDetailsPage.styled';

const MovieDetailsPage = props => {
  const [item, setItem] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    FetchCard(`movie/${movieId}`)
      .then(data => data.json())
      .then(resp =>
        setItem({
          poster_path: `https://image.tmdb.org/t/p/w500${resp.poster_path}`,
          original_title: `${resp.original_title}`,
        })
      );
  }, [movieId]);

  return (
    <div>
      <h1>{item.original_title}</h1>
      <ImgCard
        className="img__card"
        src={item.poster_path}
        alt={item.original_title}
      />
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
