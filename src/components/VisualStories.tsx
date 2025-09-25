import React, { useState, useEffect } from "react";
import { motion } from 'motion/react';

// Import videos from assets folder
import mac1 from "../assets/mac1 (1).mp4";
import mac2 from "../assets/mac1 (2).mp4";
import mac3 from "../assets/mac1 (3).mp4";
import mac4 from "../assets/mac1 (4).mp4";
import mac5 from "../assets/mac1 (5).mp4";
import mac6 from "../assets/mac1 (6).mp4";
import mac7 from "../assets/mac1 (7).mp4";

const VisualStories = () => {
  const videos = [mac1, mac2, mac3, mac4, mac5, mac6, mac7];
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "MAC'S VISUAL STORIES";

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    const handleTyping = () => {
      if (!isDeleting && currentIndex < fullText.length) {
        // Typing forward
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else if (!isDeleting && currentIndex === fullText.length) {
        // Pause at end of typing
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentIndex > 0) {
        // Deleting backward
        setDisplayText(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1);
      } else if (isDeleting && currentIndex === 0) {
        // Pause at beginning and switch back to typing
        setIsDeleting(false);
        setTimeout(() => {}, 500); // Small pause before restarting
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [currentIndex, fullText, isDeleting]);

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-12 text-center flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span>{displayText}</span>
          <span className="ml-4 text-4xl md:text-5xl">🎥</span>
          <span className="ml-1 inline-block w-2 h-12 bg-white animate-pulse"></span>
        </motion.h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 mt-16">
        {videos.map((videoSrc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.5,
              delay: 3 + index * 0.1, // Delay videos until after typing
            }}
            className="relative group"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                controls={false}
                className="w-full h-auto object-cover"
                style={{ 
                  maxWidth: '100%', 
                  height: 'auto',
                  willChange: 'transform'
                }}
                onLoadedData={(e) => {
                  // Ensure optimal playback
                  const video = e.target as HTMLVideoElement;
                  video.playbackRate = 1.0;
                }}
              />
              {/* Glitch effect overlay - only visible on hover */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 pointer-events-none rounded-2xl transition-opacity duration-300"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl transition-opacity duration-300">
                <div className="absolute inset-0 bg-red-500 mix-blend-color opacity-30 animate-pulse"></div>
                <div className="absolute inset-0 bg-blue-500 mix-blend-color opacity-20 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default VisualStories;