import React from "react";
import "../styles/SideFilters.scss";
import schoolLogo from "../assets/img/schoolLogo.jpg";
import CoursesData from "../data/CoursesData.json";

const Sidebar = ({ filters, setFilters, setVisibleCourses }) => {
  const handleCheckboxChange = (section, value) => {
    setFilters((prev) => {
      const updated = prev[section].includes(value)
        ? prev[section].filter((v) => v !== value)
        : [...prev[section], value];
      return { ...prev, [section]: updated };
    });
  };

  const handleDropdownChange = (section, value) => {
    setFilters((prev) => ({
      ...prev,
      [section]: value ? [value] : [],
    }));
  };

  // Reset all filters to their initial state
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

  const renderCheckboxGroup = (section, options) => (
    <div className="filter-group">
      <h4>{section.charAt(0).toUpperCase() + section.slice(1)}</h4>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            checked={(filters[section] || []).includes(option)}
            onChange={() => handleCheckboxChange(section, option)}
          />
          {option}
        </label>
      ))}
    </div>
  );

  // Get unique values for each filter from JSON
  const uniqueAreas = Array.from(
    new Set(CoursesData.map((c) => c.area).filter(Boolean))
  );
  const uniqueTypes = Array.from(
    new Set(CoursesData.map((c) => c.type).filter(Boolean))
  );
  const uniqueLevels = Array.from(
    new Set(CoursesData.map((c) => c.level).filter(Boolean))
  );
  const uniqueLanguages = Array.from(
    new Set(CoursesData.map((c) => c.language).filter(Boolean))
  );
  
  // For certificate, convert boolean to string for display
  const uniqueCertificates = Array.from(
    new Set(
      CoursesData.map((c) =>
        c.certificate !== undefined ? (c.certificate ? "Yes" : "No") : null
      ).filter(Boolean)
    )
  );

  return (
    <>
      <div className="school-info">
        <div className="school-logo">
          <img src={schoolLogo} alt="School Logo" />
        </div>
        <h2>School X</h2>
        <h4>Yrkeshögskola</h4>
        <h4>Östra Kanalgatan 5211 41, Malmö</h4>
      </div>
      <div className="sidebar">
        <h2>Filters</h2>
        <div className="filter-section">
          <h3>Area</h3>
          <select
            className="select-side-filters"
            value={filters.area[0] || ""}
            onChange={(e) => handleDropdownChange("area", e.target.value)}
          >
            <option value="">Select an area</option>
            {uniqueAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
        <div className="sidebar-more-filters">
          <h2>More options</h2>
          {renderCheckboxGroup("type", uniqueTypes)}
          {renderCheckboxGroup("level", uniqueLevels)}
          {renderCheckboxGroup("certificate", uniqueCertificates)}
          {renderCheckboxGroup("language", uniqueLanguages)}

          <div className="reset-filters">
            <button className="reset-filters-btn" onClick={handleResetFilters}>
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
