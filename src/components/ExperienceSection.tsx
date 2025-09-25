import { motion } from 'motion/react';
import { Star, Code, Camera, Award, TrendingUp, Lightbulb } from 'lucide-react';
import { isHighPerformanceDevice } from '../utils/performanceUtils';

export function ExperienceSection() {
  const technicalSkills = [
    { name: "Premiere Pro", level: 95, color: "bg-white" },
    { name: "After Effects", level: 90, color: "bg-white" },
    { name: "Lightroom", level: 92, color: "bg-white" },
    { name: "Photoshop", level: 88, color: "bg-white" },
    { name: "Final Cut Pro", level: 94, color: "bg-white" },
    { name: "DaVinci Resolve", level: 85, color: "bg-white" }
  ];

  const personalSkills = [
    { name: "Creativity", level: 98, color: "bg-white" },
    { name: "Attention to Detail", level: 95, color: "bg-white" },
    { name: "Storytelling", level: 92, color: "bg-white" },
    { name: "Collaboration", level: 90, color: "bg-white" },
    { name: "Adaptability", level: 88, color: "bg-white" },
    { name: "Time Management", level: 85, color: "bg-white" }
  ];

  const experiences = [
    {
      company: "INDIE CREATORS",
      period: "JAN 2024 - PRESENT", 
      role: "Freelance Videographer",
      description: "Providing high-quality videography services for independent creators. I made videos for creators at creative meets and have made music videos."
    },
    {
      company: "UNDERGROUND MCR",
      period: "NOV 2023 - FEB 2024",
      role: "Content Creator",
      description: "Created multimedia content for Manchester's underground music scene"
    }
  ];

  const inspirationalQuotes = [
    "Every frame tells a story, every story deserves to be told beautifully.",
    "The best camera is the one you have with you.",
    "Vision without execution is just a hallucination.",
    "Capture moments, create memories, tell stories that matter.",
    "Great videography is about seeing the extraordinary in the ordinary."
  ];

  return (
    <section id="experience" className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20 relative overflow-hidden">
      {/* Animated background elements */}
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
            EXPERIENCE & EXPERTISE
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-white to-gray-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`bg-gray-800/50 ${isHighPerformanceDevice() ? 'backdrop-blur-sm' : ''} rounded-2xl p-8 border border-gray-700 shadow-2xl`}
          >
            <div className="flex items-center mb-8">
              <div className="bg-white p-3 rounded-full mr-4">
                <Code className="text-black" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
            </div>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-300">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={`bg-gray-800/50 ${isHighPerformanceDevice() ? 'backdrop-blur-sm' : ''} rounded-2xl p-8 border border-gray-700 shadow-2xl`}
          >
            <div className="flex items-center mb-8">
              <div className="bg-white p-3 rounded-full mr-4">
                <Star className="text-black" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Personal Skills</h3>
            </div>
            
            <div className="space-y-6">
              {personalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-300">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 1 + index * 0.1, duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Professional Journey & Inspiration - Now in a single column below */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto mt-10">
          {/* Professional Journey */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className={`bg-gray-800/50 ${isHighPerformanceDevice() ? 'backdrop-blur-sm' : ''} rounded-2xl p-8 border border-gray-700 shadow-2xl`}
          >
            <div className="flex items-center mb-8">
              <div className="bg-white p-3 rounded-full mr-4">
                <TrendingUp className="text-black" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Professional Journey</h3>
            </div>
            
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-1 mb-4">
                <div className="bg-gray-800 rounded-full px-6 py-3">
                  <span className="text-3xl font-bold text-white">1.5+ YEARS</span>
                </div>
              </div>
              <p className="text-gray-300 text-lg">Of Professional Experience</p>
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.2, duration: 0.6 }}
                  className="border-l-4 border-blue-500 pl-4 py-1"
                >
                  <h4 className="text-lg font-bold text-white">{exp.company}</h4>
                  <p className="text-gray-400 text-sm">{exp.period}</p>
                  <p className="text-gray-300 mt-1">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Inspirational Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className={`bg-gradient-to-br from-blue-900/50 to-purple-900/50 ${isHighPerformanceDevice() ? 'backdrop-blur-sm' : ''} rounded-2xl p-8 border border-gray-700 shadow-2xl text-center`}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-full">
                <Lightbulb className="text-black" size={32} />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6">Words of Inspiration</h3>
            
            <div className="space-y-4">
              {inspirationalQuotes.map((quote, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 + index * 0.3, duration: 0.8 }}
                  className="text-gray-300 italic"
                >
                  "{quote}"
                </motion.p>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 1 }}
              className="mt-8 pt-6 border-t border-gray-700"
            >
              <p className="text-white font-bold text-lg">"Creating visual stories that inspire and captivate"</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}