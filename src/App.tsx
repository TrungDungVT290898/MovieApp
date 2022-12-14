import React from 'react';
import logo from './logo.svg';
import './index.css';
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from './contexts/AuthProvider';
import Router from './routes';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
