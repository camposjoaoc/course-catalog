import React, { useState } from 'react';
import "../styles/SideFilters.scss";
import schoolLogo from "../assets/img/schoolLogo.jpg";

const Sidebar = () => {
  const [filters, setFilters] = useState({
    area: [],
    StudyForm: [],
    Type: [],
    Semester: [],
    Level: [],
    Certificate: [],
    Language: [],
  });

  const handleCheckboxChange = (section, value) => {
    setFilters(prev => {
      const updated = prev[section].includes(value)
        ? prev[section].filter(v => v !== value)
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

  console.log("Filters:", filters);

  return (
    <>
    <div className='school-info'>
      <div className='school-logo'>
       <img src={schoolLogo} alt="School Logo"/>
      </div>
      <h2>School X</h2>
      <h4>Yrkeshögskola</h4>
      <h4>Östra Kanalgatan 5211 41, Malmö</h4>
    </div>
    <div className="sidebar">
      <h2>Filters</h2>
      <div className="filter-section">
            <h3>Area</h3>
            <select className="select-side-filters" value={filters.area[0] || ''} onChange={(e) => handleDropdownChange('area', e.target.value)}>
              <option value="">Select an area</option>
              <option value="Design">Design</option>
              <option value="Engineering">Engineering</option>
              <option value="Health and care">Health and care</option>
              <option value="Sustainability">Sustainability</option>
              <option value="Arts and Culture">Arts and Culture</option>
            </select>
          </div>
      {renderCheckboxGroup("StudyForm", ["Remote", "Campus", "Hybrid"])}
      {renderCheckboxGroup("Type", ["Program", "Course"])}
      {renderCheckboxGroup("Semester", ["Spring 2025", "Autumn 2025", "Spring 2026"])}
      {renderCheckboxGroup("Level", ["Bachelor", "Master", "Specialization"])}
      {renderCheckboxGroup("Certificate", ["Yes", "No"])}
      {renderCheckboxGroup("Language", ["English", "Swedish"])}
    </div>
  </>
  );
};

export default Sidebar;
