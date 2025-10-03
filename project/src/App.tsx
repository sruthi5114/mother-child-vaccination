import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import MaternalRegistration from './components/MaternalRegistration';
import ChildRegistration from './components/ChildRegistration';
import VaccinationSchedule from './components/VaccinationSchedule';
import HealthWorkerDashboard from './components/HealthWorkerDashboard';
import CampManagement from './components/CampManagement';
import Reports from './components/Reports';
import Profile from './components/Profile';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';

function AppContent() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {user && <Header />}
      <main className={user ? 'pt-16' : ''}>
        <Routes>
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace />} />
          <Route path="/" element={user ? <Dashboard /> : <Navigate to="/login" replace />} />
          <Route path="/maternal-registration" element={user ? <MaternalRegistration /> : <Navigate to="/login" replace />} />
          <Route path="/child-registration" element={user ? <ChildRegistration /> : <Navigate to="/login" replace />} />
          <Route path="/vaccination-schedule" element={user ? <VaccinationSchedule /> : <Navigate to="/login" replace />} />
          <Route path="/health-worker" element={user?.role === 'healthworker' ? <HealthWorkerDashboard /> : <Navigate to="/" replace />} />
          <Route path="/camps" element={user ? <CampManagement /> : <Navigate to="/login" replace />} />
          <Route path="/reports" element={user ? <Reports /> : <Navigate to="/login" replace />} />
          <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" replace />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <Router>
          <AppContent />
        </Router>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;