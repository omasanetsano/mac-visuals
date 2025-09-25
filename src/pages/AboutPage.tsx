import { motion } from 'motion/react';
import { AboutSection } from '../components/AboutSection';

// Simplified version without motion animations for better performance
export function AboutPage() {
  return (
    // Removed motion animations and background elements for better performance
    <div className="min-h-screen">
      <AboutSection />
    </div>
  );
}
