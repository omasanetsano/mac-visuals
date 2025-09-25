// @ts-ignore
import image_5cd2c6568861113efef088165ee4352afe284d03 from '../assets/5cd2c6568861113efef088165ee4352afe284d03.png';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { isHighPerformanceDevice } from '../utils/performanceUtils';

export function HeroSection() {
  const navLinks = [
    { to: '/about', label: 'About Me' },
    { to: '/experience', label: 'Experience' },
    { to: '/portfolio', label: 'Portraits' },
    { to: '/content', label: 'Visual Stories' }
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 to-black pt-4 relative overflow-hidden">
      {/* Animated background elements - similar to About page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(isHighPerformanceDevice() ? 10 : 5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={isHighPerformanceDevice() ? {
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.5, 0.2],
            } : { opacity: 0.2 }}
            transition={isHighPerformanceDevice() ? {
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            } : {}}
          />
        ))}
      </div>

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

      {/* Welcome text at top */}
      <motion.div 
        className="text-center pt-2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.p 
          className="text-gray-400 text-lg sm:text-xl"
          animate={{ 
            textShadow: [
              "0 0 3px rgba(255, 255, 255, 0.3)",
              "0 0 6px rgba(255, 255, 255, 0.5)",
              "0 0 3px rgba(255, 255, 255, 0.3)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Welcome to MALCOLM's digital portfolio
        </motion.p>
      </motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 py-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[80vh]">
          
          {/* Left side - Text content and navigation in a card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`bg-gray-800/50 ${isHighPerformanceDevice() ? 'backdrop-blur-sm' : ''} rounded-2xl p-8 border border-gray-700 shadow-2xl`}
          >
            <div className="space-y-6 sm:space-y-8 lg:space-y-12">
              <div className="space-y-4">
                <motion.h1 
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-300 leading-tight uppercase"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ 
                    x: 0, 
                    opacity: 1,
                    textShadow: [
                      "0 0 10px rgba(255, 255, 255, 0.5)",
                      "0 0 20px rgba(255, 255, 255, 0.8)",
                      "0 0 10px rgba(255, 255, 255, 0.5)"
                    ]
                  }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  whileHover={{ 
                    scale: 1.05, 
                    textShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
                  }}
                >
                YOUR
                </motion.h1>
                <motion.h1 
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-300 leading-tight uppercase"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ 
                    x: 0, 
                    opacity: 1,
                    textShadow: [
                      "0 0 10px rgba(255, 255, 255, 0.5)",
                      "0 0 20px rgba(255, 255, 255, 0.8)",
                      "0 0 10px rgba(255, 255, 255, 0.5)"
                    ]
                  }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  whileHover={{ 
                    scale: 1.05, 
                    textShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
                  }}
                >
                  FAVOURITE
                </motion.h1>
                <motion.h1 
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold italic text-white transform -rotate-2 font-handwriting"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ 
                    y: 0, 
                    opacity: 1,
                    textShadow: [
                      "0 0 10px rgba(255, 255, 255, 0.6)",
                      "0 0 20px rgba(255, 255, 255, 0.9)",
                      "0 0 10px rgba(255, 255, 255, 0.6)"
                    ],
                  }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  whileHover={{ 
                    scale: 1.1, 
                    textShadow: "0 0 25px rgba(255, 255, 255, 1)"
                  }}
                >
                  VIDEOGRAPHER
                </motion.h1>
              </div>
              
              {/* Navigation Links */}
              <motion.div 
                className="space-y-2 mt-8 sm:mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      delay: 1.3 + index * 0.1, 
                      duration: 0.4,
                    }}
                  >
                    <Link 
                      to={link.to}
                      className="block text-gray-300 hover:text-white transition-colors underline text-lg sm:text-xl group"
                    >
                      <motion.span
                        whileHover={{ 
                          x: 10, 
                          textShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.label}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Profile image with torn paper effect in a card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={`bg-gray-800/50 ${isHighPerformanceDevice() ? 'backdrop-blur-sm' : ''} rounded-2xl p-8 border border-gray-700 shadow-2xl flex items-center justify-center`}
          >
            <motion.div 
              className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-[400px] lg:h-[500px]"
              whileHover={{ 
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Simplified torn paper border effect */}
              <motion.div 
                className="absolute inset-0 transform rotate-1 shadow-xl"
                style={{
                  clipPath: `polygon(
                    8% 2%, 92% 0%, 98% 8%, 100% 15%, 97% 25%, 100% 35%, 95% 45%, 98% 55%, 
                    100% 65%, 96% 75%, 99% 85%, 94% 95%, 85% 98%, 75% 100%, 65% 97%, 
                    55% 99%, 45% 96%, 35% 98%, 25% 95%, 15% 97%, 8% 92%, 2% 85%, 
                    0% 75%, 3% 65%, 1% 55%, 4% 45%, 2% 35%, 5% 25%, 1% 15%, 6% 8%
                  )`
                }}
              />
              
              {/* Main image container */}
              <motion.div 
                className="relative w-full h-full overflow-hidden transform rotate-1 shadow-lg"
                style={{
                  clipPath: `polygon(
                    10% 4%, 90% 2%, 96% 10%, 98% 18%, 95% 28%, 98% 38%, 93% 48%, 96% 58%, 
                    98% 68%, 94% 78%, 97% 88%, 92% 96%, 82% 98%, 72% 96%, 62% 98%, 
                    52% 95%, 42% 97%, 32% 94%, 22% 96%, 12% 93%, 6% 88%, 4% 78%, 
                    7% 68%, 3% 58%, 6% 48%, 4% 38%, 8% 28%, 3% 18%, 8% 10%
                  )`
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <ImageWithFallback
                    src={image_5cd2c6568861113efef088165ee4352afe284d03}
                    alt="Creative professional portrait"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}