import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import Navbar from '../../components/NavBar/NavBar';
import axios from 'axios';

const HomePage = ({ setUserLoggedIn }) => {
  const navigate = useNavigate();
  
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('São Paulo');

  useEffect(() => {
    const apiKey = '257f58e8943428f8d0545800a2381468';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    axios.get(url)
      .then(response => {
        setWeather(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar os dados do tempo', error);
      });
  }, [city]);

  const handleStart = () => {
    navigate('/tasks');
  };

  return (
    <div className="home-page">
      <Navbar setUserLoggedIn={setUserLoggedIn} />
      <div className="content">
        <h2>Bem-vindo ao HabitFlow!</h2>
        <p>Organize e melhore sua rotina de forma simples e eficaz.</p>
        <button className="start-btn" onClick={handleStart}>Comece agora</button>
        
        {weather ? (
          <div className="weather">
            <h3>Previsão do Tempo em {weather.name}</h3>
            <p>{weather.weather[0].description}</p>
            <p><strong>{weather.main.temp}°C</strong></p>
            <p>Temperatura mínima: {weather.main.temp_min}°C</p>
            <p>Temperatura máxima: {weather.main.temp_max}°C</p>
          </div>
        ) : (
          <p>Carregando a previsão do tempo...</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
