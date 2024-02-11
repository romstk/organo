import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


//Esta linha é responsável por utilizar o ReactDOM previamente importada e atribuir a uma variável root o elemento root na aplicação e renderizá-la. 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //StrictMode serve para logs de desenvolvimento nos avisando com mensagens úteis em tempo de desenvolvimento. 
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

