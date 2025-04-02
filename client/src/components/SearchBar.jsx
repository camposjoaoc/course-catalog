// src/components/SearchBar.jsx
import React, { useState } from 'react';
import '../styles/SearchBar.scss';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search..."
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
};

export default SearchBar;
