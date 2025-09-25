import { motion } from 'motion/react';
import { User, Award, Camera, MapPin, Calendar, Star, Code } from 'lucide-react';
// Import the behind-the-scenes image
import behindTheScenesImage from '../assets/b25725c2d9fe3e83e8e8b5a7eceb73fde424a4a3.png';

export function AboutSection() {
  const personalInfo = {
    name: "MALCOLM (MAC)",
    title: "Professional Videographer & Content Creator",
    location: "Manchester, UK",
    experience: "1.5+ Years",
    about: "I'm Malcolm, a Manchester-based multidisciplinary videographer with 1.5 years of experience in fashion and videography. My work spans cinematography, filmmaking, digital storytelling, and fashion content creation. Ready to travel anywhere for the perfect shot. My portfolio reflects a diverse set of skills rooted in culture, authenticity, and innovation. I work closely with clients to understand their vision, values, and goals - bringing ideas to life with cinematic excellence."
  };

  const achievements = [
    { icon: Camera, title: "50+ Projects", description: "Completed for diverse clients across various industries" },
    { icon: Award, title: "Client Satisfaction", description: "Consistently delivering high-quality visual content" },
    { icon: MapPin, title: "Global Reach", description: "Willing to travel worldwide for the perfect shot" },
    { icon: Calendar, title: "Quick Turnaround", description: "Efficient workflow ensuring timely delivery" }
  ];

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 30px rgba(255, 255, 255, 0.8)"
            }}
          >
            ABOUT ME
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-white to-gray-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl"
          >
            <div className="flex items-center mb-8">
              <div className="bg-white p-3 rounded-full mr-4">
                <User className="text-black" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Personal Information</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-3xl font-bold text-white mb-2">{personalInfo.name}</h4>
                <p className="text-blue-400 text-lg mb-4">{personalInfo.title}</p>
                <div className="flex items-center text-gray-300 mb-2">
                  <MapPin size={18} className="mr-2" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar size={18} className="mr-2" />
                  <span>{personalInfo.experience} of Experience</span>
                </div>
              </div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-gray-300"
              >
                {personalInfo.about}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="pt-4 border-t border-gray-700"
              >
                <p className="text-white font-medium">
                  Let's create something extraordinary together.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Behind the Scenes Photo - Polaroid Style */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl flex items-center justify-center"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-8">Behind the Scenes</h3>
              
              {/* Polaroid Container */}
              <div className="relative mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white p-4 shadow-xl rounded-sm inline-block">
                  <img 
                    src={behindTheScenesImage} 
                    alt="Behind the scenes" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="text-center mt-3 text-sm font-medium text-gray-800">
                    Professional video production
                  </div>
                </div>
                {/* Tape effect */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gray-600 opacity-80 rotate-12"></div>
              </div>
              
              <p className="text-gray-300 mt-6 text-sm">
                Capturing the perfect moment behind the camera
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key Achievements - Full Width */}
        <div className="max-w-7xl mx-auto mt-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-2xl"
          >
            <div className="flex items-center mb-8 justify-center">
              <div className="bg-white p-3 rounded-full mr-4">
                <Star className="text-black" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Key Achievements</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    className="bg-gray-700/50 p-4 rounded-xl text-center border border-gray-600 hover:border-white transition-colors"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
                    }}
                  >
                    <div className="bg-white p-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="text-black" size={20} />
                    </div>
                    <h4 className="text-white font-bold mb-1">{achievement.title}</h4>
                    <p className="text-gray-400 text-sm">{achievement.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}