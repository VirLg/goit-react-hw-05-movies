import React from 'react';
import { Suspense } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FetchCard from 'components/Api/Api';
import { ImgCard, Flex } from './MoviDetailsPage.styled';

const MovieDetailsPage = props => {
  const [item, setItem] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    FetchCard(`movie/${movieId}`)
      .then(data => data.json())
      .then(resp =>
        setItem({
          poster_path: `https://image.tmdb.org/t/p/w500${resp.poster_path}`,
          original_title: `${resp.original_title}`,
          overview: `${resp.overview}`,
          release_date: `${resp.release_date}`,
          genres: `${resp.genres.map(({ name }) => [name])}`,
          popularity: `${Math.floor(resp.popularity * 0.01)}%`,
        })
      );
  }, [movieId]);

  return (
    <div>
      <Link to={location.state?.from ?? '/'} state={location}>
        Go back
      </Link>
      <Flex>
        <ImgCard
          className="img__card"
          src={item.poster_path}
          alt={item.original_title}
        />
        <div>
          <h1>
            {item.original_title}(<span>{item.release_date}</span>)
          </h1>
          <h2>{item.vote_count}</h2>
          <h3>{item.overview}</h3>
          <p>{item.genres}</p>
          <p>{item.popularity}</p>
        </div>
      </Flex>

      <ul>
        <li>
          <Link to="cast" state={{ from: location.state.from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location.state.from }}>
            Gallery
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetailsPage;
