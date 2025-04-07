import React, { useState } from 'react';
import "../styles/SideFilters.scss";
import schoolLogo from "../assets/img/schoolLogo.jpg";

const Sidebar = () => {
  const [filters, setFilters] = useState({
    Area: [],
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
      {renderCheckboxGroup("Area", ["IT", "Engineering", "Health and care", "Sustainability", "Arts and Culture"])}
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
