import React from 'react';
import { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import FetchCard from 'components/Api/Api';
const Cast = () => {
  const [error, setError] = useState('');
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    FetchCard(`movie/${movieId}/credits`)
      .then(data => data.json())
      .then(resp => setCast(resp.cast))
      .catch(error => setError(error.message));
  }, [movieId]);
  console.log(cast);
  const render = useMemo(() => {
    return cast.map(({ profile_path, name, id }) => {
      return {
        profile_path: `https://image.tmdb.org/t/p/w500${profile_path}??''`,
        name,
        id,
      };
    });
  }, [cast]);

  return render.map(({ profile_path, name, id }) => {
    return (
      <ul key={id}>
        <li>
          <img src={profile_path} alt={name} />
        </li>

        <li>{name}</li>
      </ul>
    );
  });
};

export default Cast;
// {murkup && murkup.map( => console.log(name))}
