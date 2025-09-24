import { motion } from 'motion/react';
import { AboutSection } from '../components/AboutSection';

export function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -2000, rotate: -720 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      exit={{ opacity: 0, x: 2000, rotate: 720 }}
      transition={{ 
        duration: 0.7, 
        ease: [0.23, 1, 0.32, 1],
        rotate: { duration: 1, ease: "easeInOut" }
      }}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Electric animated background - white particles - reduced for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 3, 1],
              opacity: [0.2, 0.8, 0.2],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 6 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
          />
        ))}
        
        {/* Electric lightning bolts */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          delay: 0.3, 
          duration: 0.3, 
          ease: "backOut",
          scale: { type: "spring", stiffness: 300, damping: 20 }
        }}
      >
        <AboutSection />
      </motion.div>
    </motion.div>
  );
}