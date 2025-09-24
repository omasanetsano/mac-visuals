import { motion } from 'motion/react';
import { Phone, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <motion.footer 
      className="bg-black border-t border-gray-800 py-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.6, 0.2],
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo/Name */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center md:text-left"
          >
            <motion.h3 
              className="text-white font-bold text-xl"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(255, 255, 255, 0.8)"
              }}
              animate={{
                textShadow: [
                  "0 0 10px rgba(255, 255, 255, 0.4)",
                  "0 0 20px rgba(255, 255, 255, 0.6)",
                  "0 0 10px rgba(255, 255, 255, 0.4)"
                ]
              }}
              transition={{
                textShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              MALCOLM (MAC) <span className="ml-2">🎥</span>
            </motion.h3>
            <motion.p 
              className="text-gray-400 text-sm mt-1"
              whileHover={{ color: "#FFFFFF" }}
            >
              Manchester Videographer & Content Creator
            </motion.p>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Email */}
            <motion.a
              href="mailto:omadheborzino@gmail.com"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="bg-gray-800 p-2 rounded-lg group-hover:bg-gray-700 transition-colors"
                whileHover={{ 
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                  rotate: 5
                }}
              >
                {/* Email Icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </motion.div>
              <span className="hidden sm:block">omadheborzino@gmail.com</span>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/mac_is_dope/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="bg-gray-800 p-2 rounded-lg group-hover:bg-gray-700 transition-colors"
                whileHover={{ 
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                  rotate: -5
                }}
              >
                <Instagram size={18} />
              </motion.div>
              <span className="hidden sm:block">@mac_is_dope</span>
            </motion.a>

            {/* TikTok */}
            <motion.a
              href="https://www.tiktok.com/@mac_is_dope?_t=ZS-8zwylXh1S1Q&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="bg-gray-800 p-2 rounded-lg group-hover:bg-gray-700 transition-colors"
                whileHover={{ 
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                  rotate: 5
                }}
              >
                {/* TikTok Icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </motion.div>
              <span className="hidden sm:block">@mac_is_dope</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="mt-8 pt-6 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.p 
            className="text-gray-500 text-sm px-4"
            whileHover={{ color: "#9CA3AF" }}
          >
            © 2024 Malcolm (Mac). All rights reserved. | Manchester-based videographer available worldwide.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
}