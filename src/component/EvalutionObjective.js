import React from 'react';
import './EvaluationObjective.css';
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
          pathColor: '#00aaff',
          textColor: '#333',
          trailColor: '#d6d6d6',
        })}
      />
    </div>
  );
};

const LineLoadingGraph = ({ value, maxValue }) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="line-graph">
      <div className="line-graph-fill" style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

const EvaluationObjective = () => {
  const evaluationObjectives = [
    { label: 'Account', value: 500 },
    { label: 'Virtual Daily Loss', value: '$2,000.00' },
    { label: 'Virtual Overall Loss', value: '$3,500.00' },
    { label: 'Virtual Profit Target', value: '$3,500.00' },
    { label: 'Minimum Trading Day', value: 3 },
    { label: 'Customer', value: '$50,000.00' },
  ];

  return (
    <div className="main-container">
      <div className="heading">Evaluation Objective</div>
      <div className="flex-container">
        {evaluationObjectives.map((objective, index) => (
          <div className="flex-item" key={index}>
            <div className="objective-label">{objective.label}</div>
            {objective.label === 'Virtual Daily Loss' ? (
              <LineLoadingGraph value={2000} maxValue={4000} />
            ) : typeof objective.value === 'number' ? (
              <CircularGraph value={objective.value} maxValue={1000} />
            ) : (
              <div className="objective-value">{objective.value}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EvaluationObjective;
