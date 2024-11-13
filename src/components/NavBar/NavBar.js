// NavBar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

const Navbar = ({ setUserLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="navbar">
      <div className="logo">
        HabitFlow
      </div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/tasks">Tarefas</Link></li>
        <li><Link to="/routines">Rotinas</Link></li> {/* Novo link para Rotinas */}
        <li><Link to="/profile">Perfil</Link></li>
      </ul>
      <button onClick={handleLogout} className="logout-btn">Logout</button>
    </div>
  );
};

export default Navbar;
