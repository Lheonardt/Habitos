// RoutineItem.js
import React from 'react';
import './RotinaItem.css';

const RoutineItem = ({ routine, updateRoutineStatus }) => {
  const handleStatusChange = (e) => {
    const status = e.target.checked ? "completed" : "not_completed";
    updateRoutineStatus(routine.id, status);
  };

  return (
    <div className={`routine-item ${routine.status}`}>
      <label>
        <input
          type="checkbox"
          checked={routine.status === "completed"}
          onChange={handleStatusChange}
        />
        {routine.name}
      </label>
      <button onClick={() => updateRoutineStatus(routine.id, "pending")}>Pendente</button>
    </div>
  );
};

export default RoutineItem;
