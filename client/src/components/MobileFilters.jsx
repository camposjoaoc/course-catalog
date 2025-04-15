
import React, { useState } from "react";
import "../styles/MobileFilters.scss";

const MobileFilters = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: [value],
    }));
  };

  return (
    <div className="mobile-filters">
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide Filters ▲" : "Show Filters ▼"}
      </button>

      {isOpen && (
        <div className="filters-dropdown">
          <select onChange={e => handleChange("area", e.target.value)}>
            <option value="">Area</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
          </select>

          <select onChange={e => handleChange("semester", e.target.value)}>
            <option value="">Semester</option>
            <option value="spring">Spring</option>
            <option value="fall">Fall</option>
          </select>

        </div>
      )}
    </div>
  );
};

export default MobileFilters;
