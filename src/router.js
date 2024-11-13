// router.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/PerfilPage/PerfilPage';
import TasksPage from './pages/TarefasPage/TarefasPage';
import RoutinesPage from './pages/RotinasPage/RotinasPage'; // Importar RoutinesPage

const RouterConfig = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {

  }, []);

  return (
    <Router>
      <Routes>
        {/* Página de Login */}
        <Route path="/" element={<LoginPage setUserLoggedIn={setUserLoggedIn} />} />

        {/* Páginas protegidas */}
        <Route
          path="/home"
          element={userLoggedIn ? <HomePage setUserLoggedIn={setUserLoggedIn} /> : <Navigate to="/" />}
        />
        <Route
          path="/profile"
          element={userLoggedIn ? <ProfilePage setUserLoggedIn={setUserLoggedIn} /> : <Navigate to="/" />}
        />
        <Route
          path="/tasks"
          element={userLoggedIn ? <TasksPage setUserLoggedIn={setUserLoggedIn} /> : <Navigate to="/" />}
        />
        <Route
          path="/routines"
          element={userLoggedIn ? <RoutinesPage setUserLoggedIn={setUserLoggedIn} /> : <Navigate to="/" />} // Nova rota para Rotinas
        />
      </Routes>
    </Router>
  );
};

export default RouterConfig;
