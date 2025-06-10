import React, { useState } from "react";
import "../styles/MobileFilters.scss";
import FiltersPanel from "./FiltersPanel";
import { getFiltersConfig } from "../utils/filtersConfig";

const defaultFilters = {
  area: [],
  type: [],
  level: [],
  language: [],
  certificate: [],
  search: "",
  location: "",
};

const MobileFilters = ({ filters = defaultFilters, setFilters = () => {} }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleResetFilters = () => {
    setFilters(defaultFilters);
  };

  return (
    <div className="mobile-filters">
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide Filters ▲" : "Show Filters ▼"}
      </button>
      {isOpen && (
        <FiltersPanel
          filtersConfig={getFiltersConfig()}
          filters={filters}
          setFilters={setFilters}
          onReset={handleResetFilters}
          layout="mobile"
        />
      )}
    </div>
  );
};

export default MobileFilters;
