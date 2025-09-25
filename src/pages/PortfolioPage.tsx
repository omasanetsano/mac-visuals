import { motion } from 'motion/react';
import { PortfolioSection } from '../components/PortfolioSection';

// Simplified version without motion animations for better performance
export function PortfolioPage() {
  return (
    // Removed motion animations and background elements for better performance
    <div className="min-h-screen">
      <PortfolioSection />
    </div>
  );
}
