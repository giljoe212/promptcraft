import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/Dashboard';
import PromptLibrary from './pages/PromptLibrary';
import PromptGenerator from './pages/PromptGenerator';
import Profile from './pages/Profile';
import Help from './pages/Help';
import { LoginPage, RegisterPage, ForgotPasswordPage } from './pages/AuthPages';

function App() {
  // This would come from your auth context in a real app
  const isAuthenticated = false; // Set to true to bypass login

  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        
        {/* Protected Routes */}
        <Route 
          path="/" 
          element={isAuthenticated ? <MainLayout /> : <Navigate to="/login" />}
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