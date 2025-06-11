import React from "react";
import "../styles/SideFilters.scss";
import schoolLogo from "../assets/img/schoolLogo.png";
import FiltersPanel from "./FiltersPanel";
import { getFiltersConfig } from "../utils/filtersConfig";

// Sidebar component receives filters, setFilters, and setVisibleCourses as props
const Sidebar = ({ filters, setFilters, setVisibleCourses }) => {
  // Reset all filters to their initial state and reset visible courses count
  const handleResetFilters = () => {
    setFilters({
      area: [],
      type: [],
      level: [],
      language: [],
      certificate: [],
      search: "",
      location: "",
    });
    setVisibleCourses(5);
  };

  return (
    <>
      {/* School information section */}
      <div className="school-info">
        <div className="school-logo">
          <img src={schoolLogo} alt="School Logo" />
        </div>
        <h2>School X</h2>
        <h4>Yrkeshögskola</h4>
        <h4>Östra Kanalgatan 5211 41, Malmö</h4>
      </div>
      {/* Sidebar with filters */}
      <div className="sidebar">
        <h2>Filters</h2>
        <FiltersPanel
          filtersConfig={getFiltersConfig()}
          filters={filters}
          setFilters={setFilters}
          onReset={handleResetFilters}
          layout="sidebar"
        />
      </div>
    </>
  );
};

export default Sidebar;
