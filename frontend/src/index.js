import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NewContextProvider from './context/NewContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NewContextProvider>
      <App />
    </NewContextProvider>
  </React.StrictMode>
);

