import React from 'react'
import './dashboard.css'
import Graph from './Graph'
import EvaluationObjective from './EvalutionObjective'
const Dashboard = () => {
  return (
    
      <div>
        <div className="main-content">
        <div className="dashboard">
          <h2>Dashboard</h2>
          <div className="graph">
                <Graph/>
          </div>
        </div>
        <div className="details">
          <h2>Details</h2>
          <div className="table-container">
            {/* Placeholder for the table */}
            <table>
              <thead>
                <tr>
                  <th>Header 1</th>
                  <th>Header 2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data 1</td>
                  <td>Data 2</td>
                </tr>
                <tr>
                  <td>Data 4</td>
                  <td>Data 5</td>
                </tr>
                <tr>
                  <td>Data 4</td>
                  <td>Data 5</td>
                </tr>
                <tr>
                  <td>Data 4</td>
                  <td>Data 5</td>
                </tr>
                <tr>
                  <td>Data 4</td>
                  <td>Data 5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <EvaluationObjective/>
      </div>
  )
}

export default Dashboard
