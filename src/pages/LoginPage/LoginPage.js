// LoginPage.js
import React from 'react';
import './LoginPage.css';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = ({ setUserLoggedIn }) => {
  return (
    <div className="login-page">
      <div className="login-content">
        <h2>Faça seu login</h2>
        <LoginForm setUserLoggedIn={setUserLoggedIn} />
      </div>
    </div>
  );
};

export default LoginPage;