import React from 'react';
import { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import fetchCard from 'Api/Api';
import { ImgCast } from './Cast.styled';
import Nora from '../../pages/Nora.jpg';
const Cast = () => {
  const [error, setError] = useState('');
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCard(`movie/${movieId}/credits`)
      .then(resp => setCast(resp.cast))
      .catch(error => setError(error.message));
  }, [movieId]);
  console.log(error);
  const render = useMemo(() => {
    return cast.map(({ profile_path = `{Nora}`, name, id }) => {
      console.log(Nora);
      return {
        profile_path: profile_path
          ? `https://image.tmdb.org/t/p/w500${profile_path}`
          : Nora,
        name,
        id,
      };
    });
  }, [cast]);

  return render.map(({ profile_path, name, id }) => {
    return (
      <ul key={id}>
        <li>
          <ImgCast src={profile_path} alt={name} />
        </li>

        <li>{name}</li>
      </ul>
    );
  });
};

export default Cast;
// {murkup && murkup.map( => console.log(name))}
