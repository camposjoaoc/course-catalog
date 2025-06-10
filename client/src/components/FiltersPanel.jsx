import React, { useState } from "react";
import "../styles/SideFilters.scss";

const FiltersPanel = ({
  filtersConfig,
  filters,
  setFilters,
  onReset,
  layout = "sidebar",
}) => {
  // Local state for mobile: stores temporary selections
  const [tempFilters, setTempFilters] = useState(filters);

  // Decide which state to use (desktop: direct, mobile: temporary)
  const currentFilters = layout === "mobile" ? tempFilters : filters;

  // Update the correct state when changing a filter
  const handleChange = (section, value, isCheckbox = false) => {
    const updater = (prev) => {
      if (isCheckbox) {
        const updated = prev[section].includes(value)
          ? prev[section].filter((v) => v !== value)
          : [...prev[section], value];
        return { ...prev, [section]: updated };
      } else {
        return { ...prev, [section]: value ? [value] : [] };
      }
    };
    if (layout === "mobile") {
      setTempFilters((prev) => updater(prev));
    } else {
      setFilters((prev) => updater(prev));
    }
  };

  // Apply filters on mobile
  const handleApplyMobile = () => {
    setFilters(tempFilters);
    // Scroll to results
    const results = document.querySelector(".results-container");
    if (results) {
      results.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Reset also resets tempFilters on mobile
  const handleReset = () => {
    if (layout === "mobile")
      setTempFilters({
        area: [],
        type: [],
        level: [],
        language: [],
        certificate: [],
        search: "",
        location: "",
      });
    onReset();
  };

  return (
    <div className={`filters-panel ${layout}`}>
      {filtersConfig.map((filter) => (
        <div className="filter-section" key={filter.section}>
          <h3>{filter.label}</h3>
          {filter.type === "select" ? (
            <select
              className={layout === "sidebar" ? "select-side-filters" : ""}
              value={currentFilters[filter.section][0] || ""}
              onChange={(e) => handleChange(filter.section, e.target.value)}
            >
              <option value="">{filter.placeholder}</option>
              {filter.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <div className="filter-group">
              {filter.options.map((option) => (
                <label key={option}>
                  <input
                    type="checkbox"
                    checked={currentFilters[filter.section].includes(option)}
                    onChange={() => handleChange(filter.section, option, true)}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="reset-filters">
        {layout === "mobile" && (
          <button
            className="apply-filters-btn"
            onClick={handleApplyMobile}
            type="button"
          >
            Apply Filters
          </button>
        )}
        <button className="reset-filters-btn" onClick={handleReset}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FiltersPanel;
