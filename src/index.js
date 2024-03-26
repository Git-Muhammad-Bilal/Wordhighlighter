import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import App from './App';
import { TestComp } from './TestComp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

