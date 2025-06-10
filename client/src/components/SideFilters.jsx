import React from "react";
import "../styles/SideFilters.scss";
import schoolLogo from "../assets/img/schoolLogo.jpg";
import CoursesData from "../data/CoursesData.json";

// Sidebar component receives filters, setFilters, and setVisibleCourses as props
const Sidebar = ({ filters, setFilters, setVisibleCourses }) => {
  // Handles checkbox changes for filter sections (type, level, language, certificate)
  const handleCheckboxChange = (section, value) => {
    setFilters((prev) => {
      // If value is already selected, remove it; otherwise, add it
      const updated = prev[section].includes(value)
        ? prev[section].filter((v) => v !== value)
        : [...prev[section], value];
      return { ...prev, [section]: updated };
    });
  };

  // Handles dropdown changes for the "area" filter
  const handleDropdownChange = (section, value) => {
    setFilters((prev) => ({
      ...prev,
      // Only one value can be selected for dropdown, so store as single-element array
      [section]: value ? [value] : [],
    }));
  };

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

  // Renders a group of checkboxes for a given filter section
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

  // Extract unique values for each filter from CoursesData
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

  // For certificate, convert boolean values to "Yes"/"No" strings for display
  const uniqueCertificates = Array.from(
    new Set(
      CoursesData.map((c) =>
        c.certificate !== undefined ? (c.certificate ? "Yes" : "No") : null
      ).filter(Boolean)
    )
  );

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
        {/* Area filter as a dropdown */}
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
        {/* Additional filters as checkbox groups */}
        <div className="sidebar-more-filters">
          <h2>More options</h2>
          {renderCheckboxGroup("type", uniqueTypes)}
          {renderCheckboxGroup("level", uniqueLevels)}
          {renderCheckboxGroup("certificate", uniqueCertificates)}
          {renderCheckboxGroup("language", uniqueLanguages)}

          {/* Button to reset all filters */}
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
