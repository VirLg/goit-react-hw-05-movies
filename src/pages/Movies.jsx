import { useSearchParams } from 'react-router-dom';
import { fetchSearchCard } from 'Api/Api';
import { useState } from 'react';
import ItemSearchCard from 'components/ItemCard/ItemSearchCard';
import { useEffect } from 'react';

const Movies = () => {
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const updateInput = evt => {
    if (evt.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieInput: evt.target.value });
  };
  const movieInput = searchParams.get('movieInput') ?? '';
  useEffect(() => {}, [searchParams]);
  const handleSubmit = evt => {
    evt.preventDefault();
    fetchSearchCard(movieInput)
      .then(data => data.json())
      .then(resp => setSearch(resp.results))
      .catch(error => setError(error.message));
  };

  return (
    <>
      {error && <h1>{error}</h1>}
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          placeholder="Search images and photos"
          onChange={updateInput}
          value={movieInput}
        />
      </form>
      <ItemSearchCard arr={search} />
    </>
  );
};

export default Movies;
