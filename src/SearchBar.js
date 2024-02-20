// SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div> {/* Add a container div with a class */}
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} placeholder="Search..." />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
