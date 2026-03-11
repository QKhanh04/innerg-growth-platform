import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import OnboardingPage from './pages/OnboardingPage';
import DashboardPage from './pages/DashboardPage';
import SchedulePage from './pages/SchedulePage';
import WishlistPage from './pages/WishlistPage';
import ResourceHubPage from './pages/ResourceHubPage';
import ProfilePage from './pages/ProfilePage';
import ExplorePage from './pages/ExplorePage';
import ClassDetailPage from './pages/ClassDetailPage';
import CompletionPage from './pages/CompletionPage';
import PointsPage from './pages/PointsPage';
import MentorDashboardPage from './pages/MentorDashboardPage';
import CreateClassPage from './pages/CreateClassPage';
import AnalyticsPage from './pages/AnalyticsPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/class/:id" element={<ClassDetailPage />} />
        <Route path="/completion" element={<CompletionPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/resources" element={<ResourceHubPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/points" element={<PointsPage />} />
        <Route path="/mentor" element={<MentorDashboardPage />} />
        <Route path="/mentor/create" element={<CreateClassPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
