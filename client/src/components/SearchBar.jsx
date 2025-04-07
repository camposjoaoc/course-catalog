
import React, { useState } from "react";
import "../styles/searchBar.scss"; 

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

 
  const locations = ["Malmö", "Stockholm", "Gothenburg", "Uppsala", "Jönköping"];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm, selectedLocation); 
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
        placeholder="Search..."
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
    </form>
    <div className="btn-container"> 
      <button type="submit" className="search-button">Search</button>
    </div>
    </>
  );
};

export default SearchBar;
