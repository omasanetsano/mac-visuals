import image_b25725c2d9fe3e83e8e8b5a7eceb73fde424a4a3 from 'figma:asset/b25725c2d9fe3e83e8e8b5a7eceb73fde424a4a3.png';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen bg-black py-20 relative overflow-hidden">
      {/* Reduced animated background particles for better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Polaroid photos */}
          <motion.div 
            className="relative"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main polaroid */}
            <motion.div 
              className="relative w-80 mx-auto transform rotate-3"
              whileHover={{ 
                rotate: 0, 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.6)"
              }}
              transition={{ duration: 0.3 }}
              animate={{
                y: [0, -5, 0],
              }}
            >
              <motion.div 
                className="bg-white p-4 shadow-xl"
                whileHover={{
                  rotateX: 5,
                  rotateY: 3
                }}
              >
                <ImageWithFallback
                  src={image_b25725c2d9fe3e83e8e8b5a7eceb73fde424a4a3}
                  alt="Professional video production behind the scenes"
                  className="w-full h-64 object-cover"
                />
                <div className="text-black text-center mt-4 font-handwriting text-lg">
                  Behind the scenes
                </div>
              </motion.div>
              {/* Tape effect */}
              <motion.div 
                className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gray-600 opacity-80 rotate-12"
                animate={{ rotate: [12, 10, 12] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>

            {/* Secondary polaroid */}
            <motion.div 
              className="absolute -bottom-8 -right-8 w-64 transform -rotate-12"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [-12, -10, -12] }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ 
                rotate: 0, 
                scale: 1.1,
                boxShadow: "0 15px 30px rgba(0,0,0,0.5)"
              }}
            >
              <motion.div 
                className="bg-white p-3 shadow-lg"
                whileHover={{
                  rotateX: -5,
                  rotateY: -3
                }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1575320854760-bfffc3550640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2UlMjBzZXR1cHxlbnwxfHx8fDE3NTg1NDc5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Video editing workspace setup"
                  className="w-full h-40 object-cover"
                />
                <div className="text-black text-center mt-2 font-handwriting">
                  Edit Bay
                </div>
              </motion.div>
              <motion.div 
                className="absolute -top-1 right-4 w-12 h-6 bg-gray-600 opacity-80 rotate-45"
                animate={{ rotate: [45, 42, 45] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Graffiti-style text overlay */}
            <motion.div 
              className="absolute top-8 -left-8 transform -rotate-12"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              whileHover={{ scale: 1.1, rotate: -8 }}
            >
              <motion.h2 
                className="text-4xl font-bold text-gray-300"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(255, 255, 255, 0.6)",
                    "0 0 20px rgba(255, 255, 255, 0.9)",
                    "0 0 10px rgba(255, 255, 255, 0.6)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                MAC
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-400 mt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                MANCHESTER'S<br/>
                CREATIVE VISION
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right side - About text */}
          <motion.div 
            className="space-y-8"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div 
              className="bg-gray-800 p-8 border border-gray-600"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                borderColor: "#ffffff"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3 
                className="text-3xl font-bold text-white mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.1,
                  textShadow: "0 0 15px rgba(255, 255, 255, 0.8)"
                }}
              >
                MALCOLM (MAC)
              </motion.h3>
              <motion.div 
                className="space-y-4 text-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <motion.p
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  I'm Malcolm, a Manchester-based<br/>
                  multidisciplinary videographer with 1.5 years<br/>
                  of experience in fashion and videography.
                </motion.p>
                <motion.p
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  My work spans cinematography, filmmaking, digital<br/>
                  storytelling, and fashion content creation.<br/>
                  Ready to travel anywhere for the perfect shot.
                </motion.p>
                <motion.p
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  My portfolio reflects a diverse set of skills<br/>
                  rooted in culture, authenticity, and innovation.<br/>
                  I work closely with clients to understand<br/>
                  their vision, values, and goals - bringing<br/>
                  ideas to life with cinematic excellence.
                </motion.p>
                <motion.p
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  whileHover={{ 
                    x: 5, 
                    color: "#FFFFFF"
                  }}
                  className="font-medium"
                >
                  Let's create something extraordinary together.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}