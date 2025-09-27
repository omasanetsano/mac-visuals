import React, { useState, useEffect } from 'react';
import pictures1 from '../assets/pictures1.jpg';
import pictures2 from '../assets/pictures2.jpg';
import pictures3 from '../assets/pictures3.jpg';
import pictures4 from '../assets/pictures4.jpg';
import pictures5 from '../assets/pictures5.jpg';
import pictures6 from '../assets/pictures6.jpg';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play, ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Type definitions for the images
interface Project {
  image: string;
}

export function PortfolioSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const projects: Project[] = [
    {
      image: pictures1
    },
    {
      image: pictures2
    },
    {
      image: pictures3
    },
    {
      image: pictures4
    },
    {
      image: pictures5
    },
    {
      image: pictures6
    }
  ];

  const openModal = (image: string) => {
    setIsLoading(true);
    setSelectedImage(image);
    // Hide body scroll when modal is open
    document.body.style.overflow = 'hidden';
    // Simulate loading time for better UX
    setTimeout(() => setIsLoading(false), 300);
  };

  const closeModal = () => {
    setSelectedImage(null);
    // Restore body scroll when modal is closed
    document.body.style.overflow = 'unset';
  };

  // Handle ESC key to close modal
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && selectedImage) {
      closeModal();
    }
  };

  // Add event listener for ESC key
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown as EventListener);
    return () => {
      document.removeEventListener('keydown', handleKeyDown as EventListener);
    };
  }, [selectedImage]);

  return (
    <section id="portfolio" className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20 relative overflow-hidden">
      {/* Mega animated background - optimized for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 3, 1],
              opacity: [0.3, 0.8, 0.3],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 6 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          className="text-6xl font-bold text-center text-white mb-16 flex items-center justify-center"
          initial={{ opacity: 0, y: -100, scale: 0.5 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            textShadow: [
              "0 0 20px rgba(255, 255, 255, 0.5)",
              "0 0 40px rgba(255, 255, 255, 0.8)",
              "0 0 20px rgba(255, 255, 255, 0.5)"
            ]
          }}
          transition={{ duration: 1.5, ease: "backOut" }}
          whileHover={{ 
            scale: 1.1,
            textShadow: "0 0 30px rgba(255, 255, 255, 0.8)"
          }}
        >
          <span>Me As A Fashion Model</span>
          <span className="ml-4 text-5xl">📷</span>
        </motion.h2>
        
        <motion.p 
          className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Fashion and art are more than just interests for me, they are a way of life. I embrace both the challenges and the joys that come with them because my love for fashion runs as deep as my love for videography. Expressing myself authentically through these mediums is something I cherish, and I want others to see, feel, and connect with that part of me.
        </motion.p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="group cursor-pointer relative"
              initial={{ 
                opacity: 0, 
                y: 200, 
                rotateX: -90,
                scale: 0.5
              }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                scale: 1
              }}
              transition={{ 
                delay: 0.3 + index * 0.2, 
                duration: 1.2,
                ease: "backOut"
              }}
              whileHover={{ 
                scale: 1.08,
                rotateY: 5,
                rotateX: 5,
                z: 100,
                transition: { duration: 0.6 }
              }}
              whileTap={{ 
                scale: 0.95,
                rotate: 0
              }}
              style={{ perspective: 1000 }}
              onClick={() => openModal(project.image)}
            >
              {/* Polaroid container */}
              <motion.div 
                className={`bg-white p-4 shadow-2xl transform ${
                  index % 2 === 0 ? 'rotate-2' : '-rotate-2'
                }`}
                whileHover={{ 
                  rotate: 0,
                  boxShadow: "0 40px 80px rgba(0,0,0,0.8)"
                }}
                whileTap={{ 
                  scale: 0.95,
                  rotate: 0
                }}
                animate={{
                  rotate: index % 2 === 0 ? [2, 4, 2] : [-2, -4, -2],
                  y: [0, -5, 0]
                }}
                transition={{
                  rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }
                }}
              >
                <div className="relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 2 }}
                    whileTap={{ scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt=""
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                  
                  {/* Insane overlay with particles */}
                  <motion.div 
                    className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                    initial={false}
                    whileHover={{
                      background: [
                        "radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(255,255,255,0.3) 100%)",
                        "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0.7) 100%)",
                        "radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(255,255,255,0.3) 100%)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="text-center text-white">
                      <motion.div
                        initial={{ scale: 0, rotate: 180 }}
                        whileHover={{ scale: 1, rotate: 0 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.6, ease: "backOut" }}
                      >
                        <Play size={48} className="mx-auto mb-2" />
                      </motion.div>
                    </div>
                    
                    {/* Floating particles in overlay */}
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          scale: [0, 1.5, 0],
                          opacity: [0, 1, 0],
                          x: [0, Math.random() * 50 - 25],
                          y: [0, Math.random() * 50 - 25],
                        }}
                        transition={{
                          duration: Math.random() * 2 + 1,
                          repeat: Infinity,
                          delay: Math.random(),
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Animated tape effect */}
              <motion.div 
                className={`absolute -top-2 ${index % 2 === 0 ? 'left-1/4' : 'right-1/4'} w-16 h-8 bg-gray-600 opacity-80 ${index % 2 === 0 ? 'rotate-12' : '-rotate-12'}`}
                animate={{
                  rotate: index % 2 === 0 ? [12, 8, 12] : [-12, -8, -12]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Modal for full-size image viewing */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={closeModal}
            >
              <motion.div
                className="relative max-w-[60vw] max-h-[60vh]"
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30,
                  duration: 0.4 
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white bg-black/50 rounded-full p-2 sm:p-3 z-10 hover:bg-black transition-colors"
                  onClick={closeModal}
                  aria-label="Close image viewer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} className="sm:w-6 sm:h-6" />
                </motion.button>
                
                {isLoading ? (
                  <motion.div 
                    className="flex items-center justify-center h-64"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div 
                      className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-t-2 border-b-2 border-white"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 25,
                      duration: 0.4 
                    }}
                    className="flex items-center justify-center"
                  >
                    <img 
                      src={selectedImage} 
                      alt="Full size view" 
                      className="max-w-full max-h-full object-contain mx-auto shadow-2xl rounded-lg"
                    />
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
