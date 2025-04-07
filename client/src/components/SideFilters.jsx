import React, { useState } from 'react';
import "../styles/SideFilters.scss";

const Sidebar = () => {
  const [filters, setFilters] = useState({
    area: [],
    studyForm: [],
    type: [],
    semester: [],
    level: [],
    certificate: [],
    language: [],
  });

  const handleCheckboxChange = (section, value) => {
    setFilters(prev => {
      const updated = prev[section].includes(value)
        ? prev[section].filter(v => v !== value)
        : [...prev[section], value];
      return { ...prev, [section]: updated };
    });
  };

  const renderCheckboxGroup = (section, options) => (
    <div className="filter-group">
      <h4>{section}</h4>
      {options.map(option => (
        <label key={option}>
          <input
            type="checkbox"
            checked={filters[section].includes(option)}
            onChange={() => handleCheckboxChange(section, option)}
          />
          {option}
        </label>
      ))}
    </div>
  );

  return (
    <div className="sidebar">
      <h2>Filters</h2>
      {renderCheckboxGroup("Area", ["IT", "Engineering", "Health and care", "Sustainability", "Arts and Culture"])}
      {renderCheckboxGroup("StudyForm", ["Remote", "On site"])}
      {renderCheckboxGroup("Type", ["Program", "Course"])}
      {renderCheckboxGroup("Semester", ["Spring 2025", "Autumn 2025", "Spring 2026"])}
      {renderCheckboxGroup("Level", ["Bachelor’s", "Master’s", "Specialization"])}
      {renderCheckboxGroup("Certificate", ["Yes", "No"])}
      {renderCheckboxGroup("Language", ["English", "Swedish"])}
    </div>
  );
};

export default Sidebar;
