import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FetchCard from 'components/Api/Api';
const Cast = () => {
  const [error, setError] = useState('');
  const { movieId } = useParams();
  useEffect(() => {
    FetchCard(`movie/${movieId}/credits`)
      .then(data => data.json())
      .then(resp => getFormatiogCast(resp))
      .catch(error => setError(error.message));
  }, [movieId]);
  console.log(movieId);
  const getFormatiogCast = () => {};
  return <div>Cast:{movieId}</div>;
};

export default Cast;
