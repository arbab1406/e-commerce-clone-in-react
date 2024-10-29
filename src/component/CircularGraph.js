import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularGraph = ({ value, maxValue }) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div style={{ width: '70px', height: '70px' }}>
      <CircularProgressbar
        value={percentage}
        text={`${value}/${maxValue}`}
        styles={buildStyles({
          textSize: '16px',
          pathColor: '#004D99',
          textColor: '#333',
          trailColor: '#d6d6d6',
        })}
      />
    </div>
  );
};

export default CircularGraph;
