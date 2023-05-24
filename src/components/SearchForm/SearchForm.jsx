import { useState } from 'react';

const SearchForm = () => {
  const [value, setValue] = useState('');

  //   const heandleChange = ({ target }) => {
  //     const { value } = target;
  //     setValue(value);
  //   };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (value.trim() === '') {
      return;
    }
    setValue(value);
  };

  return (
    <header className="searchbar">
      <form className="form" onSummit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchForm;
