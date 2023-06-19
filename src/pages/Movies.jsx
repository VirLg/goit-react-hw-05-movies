import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useEffect } from 'react';
import ItemSearchCard from 'components/ItemCard/ItemSearchCard';
import { Form } from '../components/Form/Form';
import { fetchSearchCard } from 'Api/Api';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchArr, setSearchArr] = useState([]);
  const [error, setError] = useState('');

  const search = item => {
    if (item === '') {
      Notify.failure('Sorry, this search not valide.');
    }
    setQuery(item);
  };
  useEffect(() => {
    fetchSearchCard(query)
      .then(data => data.json())
      .then(resp => setSearchArr(resp.results))
      .catch(error => setError(error.message));
  }, [query]);

  return (
    <>
      <h2>{error}</h2>
      <Form onSubmit={search} />
      <ItemSearchCard arr={searchArr} />
    </>
  );
};

export default Movies;
