import React from "react";
import "../Styles/Reports.css";

const Reports = ({ tasks }) => {
  return (
    <div>
      <h1>Reports</h1>
      <p>View task completion reports.</p>

      <div className="report-container">
        <h2>Task Completion Overview</h2>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Description</th>
              <th>Date</th>
              <th>Time</th>
              <th>Day</th>
            </tr>
          </thead>
          <tbody>
            {/* Map over tasks passed from Tasks component */}
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.date}</td>
                <td>{task.time}</td>
                <td>{task.day}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
