import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from './Services/HelperFunc/AuthFunc';
makeServer();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <Router>
    <App />
    </Router>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
