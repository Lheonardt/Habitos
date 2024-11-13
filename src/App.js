import React from 'react';
import RouterConfig from './router'; // Importa o arquivo router.js
import './App.css';

const App = () => {
  return (
    <div className="App">
      <RouterConfig />  {/* Adiciona as rotas configuradas */}
    </div>
  );
};

export default App;
