import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Red from './Red'
import Blue from './Blue';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Red />
     <Blue />
  </React.StrictMode>
);

