import { motion } from 'motion/react';
import { ContactSection } from '../components/ContactSection';

// Simplified version without motion animations for better performance
export function ContactPage() {
  return (
    // Removed motion animations for better performance
    <div className="min-h-screen">
      <ContactSection />
    </div>
  );
}
