import React, { useState, useEffect } from 'react';
import './RotinasPage.css';
import Navbar from '../../components/NavBar/NavBar';

const RoutinesPage = ({ setUserLoggedIn }) => {
  const [routines, setRoutines] = useState([]);
  const [newRoutine, setNewRoutine] = useState('');
  const [time, setTime] = useState('');

  // Carrega as rotinas do Local Storage quando a página carrega
  useEffect(() => {
    const savedRoutines = JSON.parse(localStorage.getItem('routines')) || [];
    setRoutines(savedRoutines);
  }, []);

  // Salva as rotinas no Local Storage sempre que elas mudarem
  useEffect(() => {
    localStorage.setItem('routines', JSON.stringify(routines));
  }, [routines]);

  const handleAddRoutine = () => {
    if (newRoutine.trim() && time) {
      const updatedRoutines = [...routines, { text: newRoutine, time, status: 'pending' }];
      setRoutines(updatedRoutines);
      setNewRoutine('');
      setTime('');
    }
  };

  const handleStatusChange = (index, status) => {
    const updatedRoutines = routines.map((routine, i) =>
      i === index ? { ...routine, status } : routine
    );
    setRoutines(updatedRoutines);
  };

  const handleRemoveRoutine = (index) => {
    const updatedRoutines = routines.filter((_, i) => i !== index);
    setRoutines(updatedRoutines);
  };

  return (
    <div className="routines-page">
      <Navbar setUserLoggedIn={setUserLoggedIn} />
      <h2>Minhas Rotinas Diárias</h2>
      <div className="add-routine">
        <input
          type="text"
          placeholder="Nova rotina"
          value={newRoutine}
          onChange={(e) => setNewRoutine(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button onClick={handleAddRoutine}>Adicionar</button>
      </div>
      <ul className="routine-list">
        {routines.map((routine, index) => (
          <li key={index} className={`routine-item ${routine.status}`}>
            <div>
              <span>{routine.text}</span>
              <span className="routine-time"> - {routine.time}</span>
            </div>
            <div className="buttons">
              <button onClick={() => handleStatusChange(index, 'done')}>Feita</button>
              <button onClick={() => handleStatusChange(index, 'not-done')}>Não feita</button>
              <button onClick={() => handleStatusChange(index, 'pending')}>Pendente</button>
              <button onClick={() => handleRemoveRoutine(index)} className="remove-btn">Remover</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoutinesPage;