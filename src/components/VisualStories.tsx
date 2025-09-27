import React, { useState, useEffect, useRef } from "react";

// Import videos from assets folder
import mac1 from "../assets/mac1 (1).mp4";
import mac2 from "../assets/mac1 (2).mp4";
import mac3 from "../assets/mac1 (3).mp4";
import mac4 from "../assets/mac1 (4).mp4";
import mac5 from "../assets/mac1 (5).mp4";
import mac6 from "../assets/mac1 (6).mp4";
import mac7 from "../assets/mac1 (7).mp4";
import { Play } from 'lucide-react';
// @ts-ignore
import VideoLightbox from './VideoLightbox.jsx';

// Simplified version without motion animations for better performance
const VisualStories = () => {
  const videos = [mac1, mac2, mac3, mac4, mac5, mac6, mac7];
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
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

  // Handle video previews
  useEffect(() => {
    const videoElements = videoRefs.current;
    
    const handleVideoPreview = (video: HTMLVideoElement) => {
      if (!video) return;
      
      // Play the video muted
      video.muted = true;
      video.loop = true;
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay preview prevented:", error);
        });
      }
      
      // Pause after 5 seconds
      const timeout = setTimeout(() => {
        if (video && !video.paused) {
          video.pause();
          // Reset to beginning for next play
          video.currentTime = 0;
        }
      }, 5000);
      
      return () => clearTimeout(timeout);
    };
    
    // Apply to all videos
    videoElements.forEach((video, index) => {
      if (video) {
        // Play immediately
        handleVideoPreview(video);
        
        // Set up interval to restart preview every 5 seconds
        const interval = setInterval(() => {
          if (video) {
            video.currentTime = 0;
            handleVideoPreview(video);
          }
        }, 5000);
        
        return () => clearInterval(interval);
      }
    });
  }, []);

  const openVideoModal = (video: string) => {
    setSelectedVideo(video);
    // Hide body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    // Restore body scroll when modal is closed
    document.body.style.overflow = 'unset';
  };

  // Handle ESC key to close modal
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && selectedVideo) {
      closeVideoModal();
    }
  };

  // Add event listener for ESC key
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedVideo]);

  return (
    // Removed motion animations and background elements for better performance
    <section className="bg-black text-white py-16 min-h-screen">
      <div className="min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center flex items-center justify-center">
            <span>{displayText}</span>
            <span className="ml-4 text-4xl md:text-5xl">🎥</span>
            <span className="ml-1 inline-block w-2 h-12 bg-white animate-pulse"></span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 mt-16">
          {videos.map((videoSrc, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => openVideoModal(videoSrc)}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[index] = el as HTMLVideoElement;
                  }}
                  src={videoSrc}
                  muted
                  playsInline
                  preload="metadata"
                  controls={false}
                  className="w-full h-auto object-cover"
                  style={{ 
                    maxWidth: '100%', 
                    height: 'auto'
                  }}
                />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/50 rounded-full p-4">
                    <Play size={32} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Video Lightbox Modal */}
      <VideoLightbox 
        videoSrc={selectedVideo} 
        isOpen={!!selectedVideo} 
        onClose={closeVideoModal} 
      />
    </section>
  );
};

export default VisualStories;