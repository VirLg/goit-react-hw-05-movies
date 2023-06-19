import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export const Form = ({ onSubmit }) => {
  const [error] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams('');
  const movieInput = searchParams.get('movieInput') ?? '';

  const updateInput = evt => {
    setSearchParams({ movieInput: evt.target.value });
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams('');

    return onSubmit(movieInput);
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
    </>
  );
};
//
