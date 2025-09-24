import { motion } from 'motion/react';

export function FilmmakingPage() {
  const filmProjects = [
    {
      title: "Urban Nights",
      type: "Short Film",
      year: "2024",
      description: "A cinematic journey through city lights and shadows",
      duration: "8:45",
      image: "https://images.unsplash.com/photo-1489599736821-1cf3d9c253ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBmaWxtJTIwbmlnaHQlMjBjaXR5fGVufDF8fHx8MTc1ODYyMDQzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Creative Process",
      type: "Documentary",
      year: "2024", 
      description: "Behind the scenes of artistic creation",
      duration: "12:30",
      image: "https://images.unsplash.com/photo-1594736797933-d0b22d5a2816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMGZpbG0lMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc1ODYyMDQzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Brand Story",
      type: "Commercial", 
      year: "2024",
      description: "Compelling brand narrative for startup",
      duration: "3:20",
      image: "https://images.unsplash.com/photo-1536637151673-6000d357db07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwZmlsbSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzU4NjIwNDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, rotateX: -90, perspective: 1000 }}
      animate={{ opacity: 1, rotateX: 0, perspective: 1000 }}
      exit={{ opacity: 0, rotateX: 90, perspective: 1000 }}
      transition={{ 
        duration: 1.6, 
        ease: [0.175, 0.885, 0.32, 1.275],
        rotateX: { duration: 1.8, ease: "backOut" }
      }}
      className="min-h-screen pt-20 bg-zinc-900"
    >
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div
          initial={{ y: -100, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "backOut" }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-6xl font-bold text-white mb-4"
            initial={{ letterSpacing: "1em", opacity: 0 }}
            animate={{ letterSpacing: "0.1em", opacity: 1 }}
            transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
          >
            FILMMAKING
          </motion.h1>
          <motion.div
            className="w-32 h-1 bg-orange-400 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filmProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                y: 100, 
                rotateY: -90,
                scale: 0.8
              }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                rotateY: 0,
                scale: 1
              }}
              transition={{ 
                delay: 0.8 + index * 0.3, 
                duration: 0.8,
                ease: "backOut",
                rotateY: { duration: 1, ease: "easeOut" }
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                rotateX: 5,
                z: 50
              }}
              className="group cursor-pointer perspective-1000"
            >
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl transform-gpu border border-gray-600">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.2, rotate: 2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  
                  {/* Dramatic overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
                    initial={{ opacity: 0.3 }}
                    whileHover={{ opacity: 0.7 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Play button with crazy animation */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0, rotate: 180 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, ease: "backOut" }}
                  >
                    <motion.div
                      className="w-20 h-20 bg-orange-400 rounded-full flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.2,
                        boxShadow: "0 0 30px rgba(251, 146, 60, 0.8)"
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.div
                        className="w-0 h-0 border-l-[16px] border-l-black border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"
                        animate={{ x: [0, 2, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </motion.div>
                  </motion.div>
                  
                  {/* Type badge */}
                  <motion.div 
                    className="absolute top-4 left-4 bg-orange-400 text-black px-3 py-1 rounded-full text-sm font-bold"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.2 + index * 0.2, duration: 0.6, ease: "backOut" }}
                  >
                    {project.type}
                  </motion.div>

                  {/* Duration badge */}
                  <motion.div 
                    className="absolute top-4 right-4 bg-gray-900/80 text-white px-3 py-1 rounded-full text-sm"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.4 + index * 0.2, duration: 0.6, ease: "backOut" }}
                  >
                    {project.duration}
                  </motion.div>
                </div>
                
                {/* Project info */}
                <motion.div 
                  className="p-6 text-white"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.6 + index * 0.2, duration: 0.6 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl">{project.title}</h3>
                    <span className="text-sm text-orange-400">{project.year}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{project.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action with insane animation */}
        <motion.div
          initial={{ y: 200, opacity: 0, scale: 0 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 1, ease: "backOut" }}
          className="text-center mt-16"
        >
          <motion.button
            className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-black px-12 py-4 rounded-full font-bold text-lg"
            whileHover={{ 
              scale: 1.1, 
              boxShadow: "0 20px 40px rgba(251, 146, 60, 0.4)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(251, 146, 60, 0.3)",
                "0 0 40px rgba(251, 146, 60, 0.5)",
                "0 0 20px rgba(251, 146, 60, 0.3)"
              ]
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            Watch Full Reel
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}