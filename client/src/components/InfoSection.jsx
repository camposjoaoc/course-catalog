// src/components/InfoSection.jsx
import React from 'react';
import '../styles/InfoSection.scss';

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="info-box school">
        <h3>School</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
        <button>About us →</button>
      </div>

      <div className="info-box help">
        <h3>Help</h3>
        <p>Help topics, getting started guides and FAQs.</p>
        <button>Contact us</button>
      </div>
    </div>
  );
};

export default InfoSection;
