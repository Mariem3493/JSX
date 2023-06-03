/* importation de la bibliothèque React*/
import React from 'react';
/* importation de la bibliothèque ReactDOM */
import ReactDOM from 'react-dom/client';
/* importation du fichier css */
import './index.css';
/* importation du composant App */
import App from './App';
/* importation de la fonction reportWebVitals pour la mesure de performance de l'application */
import reportWebVitals from './reportWebVitals';
/* Création du rendu de l'application */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
