import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { DarkModeProvider } from './context/DarkModeContext';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import CaseStudyPage from './pages/CaseStudyPage';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<CaseStudyPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </DarkModeProvider>
  );
}

export default App;
