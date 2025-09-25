import { Mail, Phone, Instagram, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function ContactSection() {
  const contactItems = [
    { icon: Mail, text: "omadheborzino@gmail.com", href: "mailto:omadheborzino@gmail.com" },
    { icon: Phone, text: "+447443978978", href: "tel:+447443978978" },
    { icon: MapPin, text: "Manchester, United Kingdom", href: null }
  ];

  const socialLinks = [
    { 
      icon: Instagram, 
      handle: "@mac_visualsedits", 
      url: "https://www.instagram.com/mac_visualsedits?igsh=Zm1iZnFuMWV2eGdu",
      color: "text-pink-400"
    },
    { 
      icon: null,
      handle: "@mac_visuals_", 
      url: "https://www.tiktok.com/@mac_visuals_?_t=ZS-901lDKYIRJh&_r=1",
      color: "text-purple-400",
      customIcon: true
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20 relative overflow-hidden">
      {/* Electric animated background - optimized for performance */}
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
              scale: [1, 2, 1],
              opacity: [0.2, 0.6, 0.2],
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
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

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          className="text-6xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: -150, scale: 0.3 }}
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
            textShadow: "0 0 40px rgba(255, 255, 255, 1)"
          }}
        >
          LET'S CREATE MAGIC
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          
          {/* Contact Info - CENTERED */}
          <motion.div 
            className="space-y-8"
            initial={{ x: -300, opacity: 0, rotateY: -90 }}
            animate={{ x: 0, opacity: 1, rotateY: 0 }}
            transition={{ delay: 0.5, duration: 1.5, ease: "backOut" }}
          >
            <motion.div 
              className="space-y-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.h3 
                className="text-3xl font-bold text-gray-300"
                whileHover={{ 
                  scale: 1.1,
                  textShadow: "0 0 20px rgba(255, 255, 255, 0.8)"
                }}
              >
                Get In Touch
              </motion.h3>
              <motion.p 
                className="text-gray-400 text-lg max-w-2xl mx-auto"
                whileHover={{ color: "#D1D5DB" }}
              >
                Ready to bring your vision to life? Let's discuss your next project and create something extraordinary together.
              </motion.p>
            </motion.div>

            {/* Contact Details with SICK animations */}
            <motion.div 
              className="space-y-6"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2, delayChildren: 1.2 }
                }
              }}
              initial="hidden"
              animate="show"
            >
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -50, scale: 0.8 },
                    show: { opacity: 1, x: 0, scale: 1 }
                  }}
                  whileHover={{ 
                    x: 10, 
                    scale: 1.05,
                    color: "#FFFFFF",
                    transition: { duration: 0.3 }
                  }}
                  className="flex items-center justify-center space-x-4 text-gray-400 cursor-pointer"
                  onClick={() => item.href && window.open(item.href)}
                >
                  <motion.div
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.3,
                      boxShadow: "0 0 20px rgba(255, 255, 255, 0.6)"
                    }}
                    transition={{ duration: 0.6 }}
                    className="p-2 rounded-full bg-gray-800"
                  >
                    <item.icon size={24} />
                  </motion.div>
                  <span className="text-lg">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links - EXPLOSIVE */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 1, ease: "backOut" }}
            >
              <motion.h4 
                className="text-xl font-bold text-white text-center"
                whileHover={{ scale: 1.1, color: "#FFFFFF" }}
              >
                Follow My Work
              </motion.h4>
              <div className="flex justify-center space-x-8">
                {socialLinks.map((social, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 + index * 0.2, duration: 0.6 }}
                    whileHover={{ x: 15, scale: 1.05 }}
                  >
                    <motion.a 
                      href={social.url}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${social.color} hover:text-white transition-colors`}
                      whileHover={{ 
                        scale: 1.3,
                        rotate: 15,
                        boxShadow: "0 0 25px rgba(255, 255, 255, 0.8)"
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.customIcon ? (
                        <motion.svg 
                          width="32" 
                          height="32" 
                          viewBox="0 0 24 24" 
                          fill="currentColor"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                        >
                          <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.95-1.212-1.864-1.275-2.43C16.458 1.719 16.458 1.536 16.458 1.53V1.5c0-.041 0-.082-.01-.123h-3.933v13.891c0 .173 0 .343-.017.512a3.504 3.504 0 0 1-6.967-.552c0-1.944 1.567-3.511 3.511-3.511.173 0 .345.014.512.041V7.8c-.174-.024-.35-.037-.529-.037C4.568 7.763 1.5 10.832 1.5 14.79c0 3.958 3.068 7.027 7.025 7.027 3.958 0 7.025-3.068 7.025-7.027V9.313c1.378.979 3.037 1.551 4.825 1.551v-3.933c-.949 0-1.85-.265-2.619-.758-.374-.239-.725-.526-1.041-.858z"/>
                        </motion.svg>
                      ) : (
                        <social.icon size={32} />
                      )}
                    </motion.a>
                    <motion.span 
                      className="text-gray-400 text-lg"
                      whileHover={{ color: "#FFFFFF" }}
                    >
                      {social.handle}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}