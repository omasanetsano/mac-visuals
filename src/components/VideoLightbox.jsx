import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const VideoLightbox = ({ videoSrc, isOpen, onClose }) => {
  const videoRef = useRef(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Control video playback when modal opens/closes
  useEffect(() => {
    if (isOpen && videoRef.current) {
      // Autoplay with sound when opened
      videoRef.current.muted = false;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay with sound prevented:", error);
        });
      }
    } else if (!isOpen && videoRef.current) {
      // Stop when closed
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-w-[60vw] max-h-[60vh]"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 30,
              duration: 0.4 
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white bg-black/50 rounded-full p-2 sm:p-3 z-10 hover:bg-black transition-colors"
              onClick={onClose}
              aria-label="Close video viewer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={20} className="sm:w-6 sm:h-6" />
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 25,
                duration: 0.4 
              }}
              className="flex items-center justify-center"
            >
              <video
                ref={videoRef}
                src={videoSrc}
                controls
                className="max-w-full max-h-full object-contain mx-auto shadow-2xl rounded-lg"
                autoPlay
                playsInline
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoLightbox;