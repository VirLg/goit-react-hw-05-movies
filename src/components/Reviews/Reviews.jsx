import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FetchCard from '../../components/Api/Api';

const Reviews = () => {
  const [error, setError] = useState('');
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    FetchCard(`movie/${movieId}/reviews`)
      .then(data => data.json())
      .then(({ results }) => setReviews(results))

      .catch(error => setError(error.message));
  }, [movieId]);
  console.log(error);
  return (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <li key={id}>
          <h2>{author}</h2>
          {reviews.author}
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
