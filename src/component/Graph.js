import React from 'react';
import { Line } from 'react-chartjs-2';

import { Chart, registerables } from 'chart.js';

// Register all the components, including scales
Chart.register(...registerables);

const Graph = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Trade Balance',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(0, 77, 153, 1)',
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  return (
    <div className="graph">
      <Line data={data} />
    </div>
  );
};

export default Graph;
