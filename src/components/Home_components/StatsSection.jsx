import React from 'react';
import '../../assets/css/Home.css';
import '../../assets/css/Style.css';

const StatsSection = () => {
  return (
    <div className="stats-section py-5">
      <div className="container">
        <div className="row g-4">

          {/* Active Projects */}
          <div className="col-md-3">
            <div className="simple-stat-card">
              <h3>60,000+</h3>
              <p>ACTIVE PROJECTS</p>
            </div>
          </div>

          {/* Contractors */}
          <div className="col-md-3">
            <div className="simple-stat-card">
              <h3>9,200+</h3>
              <p>CONTRACTORS</p>
            </div>
          </div>

          {/* Average Win Rate */}
          <div className="col-md-3">
            <div className="simple-stat-card">
              <h3>34%</h3>
              <p>AVG WIN RATE</p>
            </div>
          </div>

          {/* Projects Value Tracked */}
          <div className="col-md-3">
            <div className="simple-stat-card">
              <h3>$2B</h3>
              <p>PROJECTS VALUE TRACKED</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StatsSection;