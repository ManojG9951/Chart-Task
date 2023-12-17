import React from "react";
import sprintData from "../mokeData/sprintTableData";
import "../styles/sprintTable.css";

const SprintTable = () => {
  return (
    <div className="sprintTableMain">
      <table className="sprint-table">
        <thead>
          <tr>
            <th>Sprint Name</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Completed Date</th>
          </tr>
        </thead>
        <tbody>
          {sprintData.map((sprint, index) => (
            <tr key={index}>
              <td>{sprint.sprintName}</td>
              <td>{sprint.status}</td>
              <td>{sprint.startDate}</td>
              <td>{sprint.endDate}</td>
              <td>{sprint.completedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SprintTable;
