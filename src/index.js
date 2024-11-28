// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';// src/index.js
// src/index.js
import App1 from './App1'; // Ensure this matches the file name exactly (uppercase "A")


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App1 /> {/* Render App1 here */}
  </React.StrictMode>
);
