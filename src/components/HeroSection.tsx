import image_5cd2c6568861113efef088165ee4352afe284d03 from '../assets/5cd2c6568861113efef088165ee4352afe284d03.png';
import image_7b33aa6cafdf99181db2cd20f9f3547480e76fcc from '../assets/7b33aa6cafdf99181db2cd20f9f3547480e76fcc.png';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  const navLinks = [
    { to: '/about', label: 'About me' },
    { to: '/experience', label: 'Education x Experience' },
    { to: '/portfolio', label: 'Photography' },
    { to: '/content', label: 'Visual Stories' }
  ];

  return (
    <section id="home" className="min-h-screen bg-black pt-20 relative overflow-hidden">
      {/* Animated background particles - optimized for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3],
              x: [0, Math.random() * 30 - 15],
              y: [0, Math.random() * 30 - 15],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 1,
            }}
          />
        ))}
      </div>

      {/* Electric animated background - from contact page - reduced for performance */}
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

      {/* Welcome text at top */}
      <motion.div 
        className="text-center pt-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.p 
          className="text-gray-400 text-lg sm:text-xl"
          animate={{ 
            textShadow: [
              "0 0 5px rgba(255, 255, 255, 0.3)",
              "0 0 10px rgba(255, 255, 255, 0.5)",
              "0 0 5px rgba(255, 255, 255, 0.3)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Welcome to MALCOLM's digital portfolio
        </motion.p>
      </motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[80vh]">
          
          {/* Left side - Text content and navigation */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-300 leading-tight uppercase"
                initial={{ x: -500, opacity: 0, rotateY: -90, scale: 0.5 }}
                animate={{ 
                  x: 0, 
                  opacity: 1, 
                  rotateY: 0, 
                  scale: 1,
                  textShadow: [
                    "0 0 20px rgba(255, 255, 255, 0.5)",
                    "0 0 40px rgba(255, 255, 255, 0.8)",
                    "0 0 20px rgba(255, 255, 255, 0.5)"
                  ]
                }}
                transition={{ delay: 0.8, duration: 1.5, ease: "backOut" }}
                whileHover={{ 
                  scale: 1.1, 
                  x: 15,
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.8)",
                  filter: "brightness(1.3)"
                }}
              >
               YOUR
              </motion.h1>
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-300 leading-tight uppercase"
                initial={{ x: 500, opacity: 0, rotateY: 90, scale: 0.5 }}
                animate={{ 
                  x: 0, 
                  opacity: 1, 
                  rotateY: 0, 
                  scale: 1,
                  textShadow: [
                    "0 0 20px rgba(255, 255, 255, 0.5)",
                    "0 0 40px rgba(255, 255, 255, 0.8)",
                    "0 0 20px rgba(255, 255, 255, 0.5)"
                  ]
                }}
                transition={{ delay: 1.2, duration: 1.5, ease: "backOut" }}
                whileHover={{ 
                  scale: 1.1, 
                  x: -15,
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.8)",
                  filter: "brightness(1.3)"
                }}
              >
                FAVOURITE
              </motion.h1>
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold italic text-white transform -rotate-2 font-handwriting"
                initial={{ scale: 0, opacity: 0, rotate: 360, y: 200 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1, 
                  rotate: -2, 
                  y: 0,
                  textShadow: [
                    "0 0 20px rgba(255, 255, 255, 0.6)",
                    "0 0 40px rgba(255, 255, 255, 0.9)",
                    "0 0 20px rgba(255, 255, 255, 0.6)"
                  ],
                  filter: [
                    "drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))",
                    "drop-shadow(0 0 20px rgba(255, 255, 255, 0.6))",
                    "drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))"
                  ]
                }}
                transition={{ delay: 1.6, duration: 2, ease: "backOut" }}
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 5,
                  y: -10,
                  textShadow: "0 0 30px rgba(255, 255, 255, 1)"
                }}
              >
                VIDEOGRAPHER
              </motion.h1>
            </div>
            
            {/* YOUR FAVOURITE VISUAL VIDEOGRAPHER text next to image */}
            <motion.div 
              className="py-4"
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.8, duration: 1.2, ease: "backOut" }}
            >
              <motion.h2 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300 uppercase leading-tight"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 30px rgba(255, 255, 255, 0.9)"
                }}
                animate={{
                  textShadow: [
                    "0 0 15px rgba(255, 255, 255, 0.4)",
                    "0 0 25px rgba(255, 255, 255, 0.7)",
                    "0 0 15px rgba(255, 255, 255, 0.4)"
                  ]
                }}
                transition={{ 
                  textShadow: { duration: 2.5, repeat: Infinity },
                  whileHover: { duration: 0.3 }
                }}
              >
              </motion.h2>
            </motion.div>

            {/* Navigation Links */}
            <motion.div 
              className="space-y-2 mt-8 sm:mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.8 }}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ 
                    delay: 2.4 + index * 0.1, 
                    duration: 0.6,
                    ease: "backOut"
                  }}
                >
                  <Link 
                    to={link.to}
                    className="block text-gray-300 hover:text-white transition-colors underline text-lg sm:text-xl group"
                  >
                    <motion.span
                      whileHover={{ 
                        x: 20, 
                        textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
                        scale: 1.05
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Profile image with torn paper effect */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            initial={{ x: 300, opacity: 0, rotateY: 180 }}
            animate={{ x: 0, opacity: 1, rotateY: 0 }}
            transition={{ delay: 1, duration: 1.5, ease: "backOut" }}
          >
            <motion.div 
              className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-[400px] lg:h-[500px]"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                z: 100
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Torn paper border effect - lighter background */}
              <motion.div 
                className="absolute inset-0 bg-gray-600 transform rotate-2 shadow-2xl"
                style={{
                  clipPath: `polygon(
                    8% 2%, 92% 0%, 98% 8%, 100% 15%, 97% 25%, 100% 35%, 95% 45%, 98% 55%, 
                    100% 65%, 96% 75%, 99% 85%, 94% 95%, 85% 98%, 75% 100%, 65% 97%, 
                    55% 99%, 45% 96%, 35% 98%, 25% 95%, 15% 97%, 8% 92%, 2% 85%, 
                    0% 75%, 3% 65%, 1% 55%, 4% 45%, 2% 35%, 5% 25%, 1% 15%, 6% 8%
                  )`
                }}
                animate={{ 
                  rotate: [2, 4, 2],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              {/* Main image container */}
              <motion.div 
                className="relative w-full h-full overflow-hidden transform rotate-1 shadow-xl"
                style={{
                  clipPath: `polygon(
                    10% 4%, 90% 2%, 96% 10%, 98% 18%, 95% 28%, 98% 38%, 93% 48%, 96% 58%, 
                    98% 68%, 94% 78%, 97% 88%, 92% 96%, 82% 98%, 72% 96%, 62% 98%, 
                    52% 95%, 42% 97%, 32% 94%, 22% 96%, 12% 93%, 6% 88%, 4% 78%, 
                    7% 68%, 3% 58%, 6% 48%, 4% 38%, 8% 28%, 3% 18%, 8% 10%
                  )`
                }}
                animate={{ 
                  rotate: [1, -1, 1],
                  boxShadow: [
                    "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                    "0 35px 60px -12px rgba(255, 255, 255, 0.2)",
                    "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                  ]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <motion.div
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.8, duration: 1, ease: "easeOut" }}
                >
                  <ImageWithFallback
                    src={image_5cd2c6568861113efef088165ee4352afe284d03}
                    alt="Creative professional portrait"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
              
              {/* Floating glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-gray-400/20 rounded-lg pointer-events-none"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}