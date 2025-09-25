import { motion } from 'motion/react';
import { ExperienceSection } from '../components/ExperienceSection';

export function ExperiencePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
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
              "radial-gradient(circle at 20% 30%, rgba(250, 246, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <ExperienceSection />
    </motion.div>
  );
}