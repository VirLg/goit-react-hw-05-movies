import { useSearchParams } from 'react-router-dom';
import { fetchSearchCard } from 'Api/Api';
import { useState } from 'react';
import ItemSearchCard from 'components/ItemCard/ItemSearchCard';
import { useEffect } from 'react';
import { Form } from '../components/Form/Form';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [searchArr, setSearchArr] = useState([]);
  const search = item => {
    setQuery(item);
  };
  useEffect(() => {
    fetchSearchCard(query)
      .then(data => data.json())
      .then(resp => setSearchArr(resp.results));
    // .catch(error => setError(error.message));
  });

  return (
    <>
      <Form onSubmit={search} />
      <ItemSearchCard arr={searchArr} />
    </>
  );
};

export default Movies;
