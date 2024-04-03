import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import App from './App';
import { AuthProvider } from './UserContext';
import { ServiecDataProvider } from './ServiceDataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ServiecDataProvider>
  <AuthProvider>
  <React.StrictMode>
      <App />
  </React.StrictMode>
  </AuthProvider>
  </ServiecDataProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
