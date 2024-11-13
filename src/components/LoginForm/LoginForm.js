import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o useNavigate para redirecionamento
import './LoginForm.css';

const LoginForm = ({ setUserLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const navigate = useNavigate(); // Inicializa o hook de navegação

  const handleLogin = async (e) => {
    e.preventDefault();

    setErrorMessage('');
    setEmailError('');
    setPasswordError('');

    // Validação de campos
    if (!email) {
      setEmailError('Email é obrigatório');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email inválido');
      return;
    }
    if (!password) {
      setPasswordError('Senha é obrigatória');
      return;
    }

    setLoading(true);

    // Simulação de login
    setTimeout(() => {
      if (email === 'teste@gmail.com' && password === '123') {
        setUserLoggedIn(true); // Define o usuário como logado
        setErrorMessage('');
        navigate('/home'); // Redireciona para a página /home
      } else {
        setErrorMessage('Email ou senha incorretos');
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={emailError ? 'error' : ''}
          required
        />
        {emailError && <p className="error-message">{emailError}</p>}
      </div>

      <div className="form-group">
        <label>Senha:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={passwordError ? 'error' : ''}
          required
        />
        {passwordError && <p className="error-message">{passwordError}</p>}
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <button type="submit" disabled={loading}>
        {loading ? 'Carregando...' : 'Entrar'}
      </button>
    </form>
  );
};

export default LoginForm;