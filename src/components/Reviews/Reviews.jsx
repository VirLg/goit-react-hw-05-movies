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
      .then(resp => setReviews(resp))
      .catch(error => setError(error.message));
  }, [movieId]);
  console.log(reviews);
  return <div>Reviews</div>;
};

export default Reviews;
