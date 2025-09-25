import image_c2b893049bd9edd7b3e55b9c49368f098700d682 from 'figma:asset/c2b893049bd9edd7b3e55b9c49368f098700d682.png';
import fashion from '../assets/fashion.jpg';
import image_7307ff073879b7e11e74dbb7adae056b6f60a7be from 'figma:asset/7307ff073879b7e11e74dbb7adae056b6f60a7be.png';
import image_d13d14c728c7291adb45063b7fbcbfc655c566ac from 'figma:asset/d13d14c728c7291adb45063b7fbcbfc655c566ac.png';
import image_c0b905c0305a1e9d34d45b66632685257571ac6e from 'figma:asset/c0b905c0305a1e9d34d45b66632685257571ac6e.png';
import image_cd3344623dccdc88b220146f09250a5a36381148 from 'figma:asset/cd3344623dccdc88b220146f09250a5a36381148.png';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export function PortfolioSection() {
  const projects = [
    {
      image: image_cd3344623dccdc88b220146f09250a5a36381148
    },
    {
      image: image_c0b905c0305a1e9d34d45b66632685257571ac6e
    },
    {
      image: image_d13d14c728c7291adb45063b7fbcbfc655c566ac
    },
    {
      image: image_7307ff073879b7e11e74dbb7adae056b6f60a7be
    },
    {
      image: fashion
    },
    {
      image: image_c2b893049bd9edd7b3e55b9c49368f098700d682
    }
  ];

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
          <span>Portraits</span>
          <span className="ml-4 text-5xl">📷</span>
        </motion.h2>
        
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
              style={{ perspective: 1000 }}
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
                    className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
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

      </div>
    </section>
  );
}