
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
                <option value="Design">Design</option>
              <option value="Engineering">Engineering</option>
              <option value="Health and care">Health and care</option>
              <option value="Sustainability">Sustainability</option>
              <option value="Arts and Culture">Arts and Culture</option>
          </select>
          
          <select onChange={e => handleChange("studyform", e.target.value)}>
            <option value="">Study form</option>
            <option value="remote">Remote</option>
            <option value="campus">Campus</option>
            <option value="hybrid">Hybrid</option>
          </select>
       
          <select onChange={e => handleChange("type", e.target.value)}>
            <option value="">Type</option>
            <option value="course">Course</option>
            <option value="programme">Programme</option>
          </select>

          <select onChange={e => handleChange("semester", e.target.value)}>
            <option value="">Semester</option>
            <option value="spring2025">Spring 2025</option>
            <option value="fall2025">Fall 2025</option>
          </select>

          <select onChange={e => handleChange("level", e.target.value)}>
            <option value="">Level</option>
            <option value="bachelor">Bachelor</option>
            <option value="master">Master</option>
            <option value="specialization">Specialization</option>
          </select>

          <select onChange={e => handleChange("certificate", e.target.value)}>
            <option value="">Certificate</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

              <select onChange={e => handleChange("language", e.target.value)}>
            <option value="">Language</option>
            <option value="swedish">Swedish</option>
            <option value="english">English</option>
          </select>

        </div>
      )}
    </div>
  );
};

export default MobileFilters;
