import { motion } from 'motion/react';
import { HeroSection } from '../components/HeroSection';

export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 3000, rotateY: 180 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      exit={{ opacity: 0, x: -3000, rotateY: -180 }}
      transition={{ 
        duration: 0.9, 
        ease: [0.23, 1, 0.32, 1],
        rotateY: { duration: 1.1, ease: "easeInOut" }
      }}
      className="min-h-screen"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: 360 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ 
          delay: 0.5, 
          duration: 0.6, 
          ease: "backOut",
          rotate: { duration: 0.7, ease: "easeInOut" }
        }}
      >
        <HeroSection />
      </motion.div>
    </motion.div>
  );
}