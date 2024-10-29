import React from 'react';
import './CustomLayout.css';
import Dashboard from './Dashboard';

const ClientStatistic = () => {
  return (
    <div>
      <header className="header">
        <div className="header-left">
          <span className="home-icon">🏠</span>
          <span className="path">Home / Client Area / Statistics</span>
        </div>
        <div className="header-right">
          <span className="text">Select your ride</span>
          <select className="select-option">
            <option value="option1">12345tfmnvcxaqwer</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </header>

      <Dashboard/>
    </div>
  );
};

export default ClientStatistic;
