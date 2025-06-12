import React, { useState } from "react";
import "../styles/SearchBar.scss"; 

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const locations = ["Online", "Malmö", "Stockholm", "Gothenburg", "Uppsala", "Jönköping"];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setHasSearched(true);
    const result = onSearch(searchTerm, selectedLocation);
    if (Array.isArray(result) && result.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
  };

  const handleReset = () => {
    setSearchTerm("");
    setSelectedLocation("");
    setNoResults(false);
    setHasSearched(false);
    onSearch("", "");
  };

  return (
    <>
      <div>
        <h1>Search for courses and programmes</h1>
      </div>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search courses..."
        />
        <select
          className="location-select"
          value={selectedLocation}
          onChange={handleLocationChange}
        >
          <option value="">Select Location</option>
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
        <button type="submit" className="search-button">Search</button>
        {hasSearched && (
          <button
            type="button"
            className="clear-button"
            onClick={handleReset}
            aria-label="Clear search"
          >
            X Clear search
          </button>
        )}
      </form>
      {noResults && (
        <div className="no-results-message">
          No courses found. Please try a different search term or location.
        </div>
      )}
    </>
  );
};

export default SearchBar;
