import React, { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query "
        placeholder="Search movie"
        autoFocus
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
