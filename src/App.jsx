import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ResumeBuilder from './pages/ResumeBuilder';
import ATSPage from './pages/ATSPage';
import CoverLetter from './pages/CoverLetter';
import Pricing from './pages/Pricing';
import Profile from './pages/Profile';
import DashboardLayout from './layout/DashboardLayout';
import ProtectedRoute from './routes/ProtectedRoute';
import Messages from './pages/Messages';
import Tasks from './pages/Tasks';

const App = () => {
  // UI-only placeholder – replace with real auth later
  const isAuthenticated = true;

  return (
    <div className="app-shell min-h-screen">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/pricing" element={<Pricing />} />
        

        <Route
          path="/app"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="resume-builder" element={<ResumeBuilder />} />
          <Route path="ats-score" element={<ATSPage />} />
          <Route path="cover-letter" element={<CoverLetter />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/app/messages" element={<Messages />} />
          <Route path="/app/tasks" element={<Tasks />} />
        </Route>

        <Route path="*" element={<Landing />} />
      </Routes>
    </div>
  );
};

export default App;