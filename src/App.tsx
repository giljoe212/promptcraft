import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/Dashboard';
import PromptLibrary from './pages/PromptLibrary';
import PromptGenerator from './pages/PromptGenerator';
import Profile from './pages/Profile';
import Help from './pages/Help';
import { LoginPage, RegisterPage, ForgotPasswordPage } from './pages/AuthPages';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={
          isAuthenticated ? 
            <Navigate to="/dashboard" /> : 
            <LoginPage onLoginSuccess={handleLogin} />
        } />
        <Route path="/register" element={
          isAuthenticated ? 
            <Navigate to="/dashboard" /> : 
            <RegisterPage />
        } />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        
        {/* Protected Routes */}
        <Route 
          path="/" 
          element={isAuthenticated ? <MainLayout onLogout={handleLogout} /> : <Navigate to="/login" />}
        >
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="library" element={<PromptLibrary />} />
          <Route path="generator" element={<PromptGenerator />} />
          <Route path="profile" element={<Profile />} />
          <Route path="help" element={<Help />} />
        </Route>
        
        {/* Fallback route */}
        <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;