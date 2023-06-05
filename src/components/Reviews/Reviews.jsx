import ItemCard from 'components/ItemCard/ItemCard';
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
      .then(resp =>
        setReviews({
          autor: `${resp.results.map(el => console.log(el))}`,
        })
      )
      .catch(error => setError(error.message));
  }, [movieId]);
  console.log(reviews);
  return (
    <div>
      <ul>
        <li>{reviews.author}</li>
        <li>{reviews.id}</li>
      </ul>
    </div>
  );
};

export default Reviews;
