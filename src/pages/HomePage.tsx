import { motion } from 'motion/react';
import { HeroSection } from '../components/HeroSection';

export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ 
        duration: 0.7, 
        ease: [0.23, 1, 0.32, 1]
      }}
      className="min-h-screen"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          delay: 0.3, 
          duration: 0.6, 
          ease: "easeOut"
        }}
      >
        <HeroSection />
      </motion.div>
    </motion.div>
  );
}