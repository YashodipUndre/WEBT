import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/index.css';
import App from './App';
import { AuthProvider } from './context/UserContext';
import { ServiecDataProvider } from './context/ServiceDataContext';
import { CartProvider } from './context/CartContext';
import { WeddingProvider } from './context/weddingContext';
import { MainProvider } from './context/MainTemplateContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MainProvider>
  <WeddingProvider>
  <CartProvider>
  <ServiecDataProvider>
  <AuthProvider>
  <React.StrictMode>
      <App />
  </React.StrictMode>
  </AuthProvider>
  </ServiecDataProvider>
  </CartProvider>
  </WeddingProvider>
  </MainProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
