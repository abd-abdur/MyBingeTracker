import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (query) {
      onSearch(query);
    }
  };

  return (
    <div className="search-bar-container">
      {/* Input field for the user to type their search query. */}
      <input
        type="text"
        placeholder="Search for movies or TV shows..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
