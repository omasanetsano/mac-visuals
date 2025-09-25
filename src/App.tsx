import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import React, { Suspense } from 'react';

// Import pages directly to avoid TypeScript issues
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContentCreationPage } from './pages/ContentCreationPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black overflow-x-hidden flex flex-col w-full">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-black focus:text-white">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow pt-16 w-full" tabIndex={-1}>  // Reduced padding from pt-20 to pt-16
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/content" element={<ContentCreationPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Catch-all route for any unmatched URLs */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}