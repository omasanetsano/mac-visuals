import { motion } from 'motion/react';
import { HeroSection } from '../components/HeroSection';

// Simplified version without motion animations for better performance
export function HomePage() {
  return (
    // Removed motion animations for better performance
    <div className="min-h-screen">
      <HeroSection />
    </div>
  );
}
