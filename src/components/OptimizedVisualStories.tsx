import React, { useState, useEffect, useRef } from "react";

// Simplified version without motion animations for better performance
const OptimizedVisualStories = () => {
  // These paths should be updated to point to optimized videos after running the optimization script
  const videos = [
    "../assets/optimized/mac1 (1).mp4",
    "../assets/optimized/mac1 (2).mp4", 
    "../assets/optimized/mac1 (3).mp4",
    "../assets/optimized/mac1 (4).mp4",
    "../assets/optimized/mac1 (5).mp4",
    "../assets/optimized/mac1 (6).mp4",
    "../assets/optimized/mac1 (7).mp4"
  ];
  
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const videoRefs = useRef([] as HTMLVideoElement[]);
  const fullText = "MAC'S VISUAL STORIES";

  useEffect(() => {
    // Initialize videoRefs with empty array
    if (!videoRefs.current) {
      videoRefs.current = [];
    }
  }, []);

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

  // Optimize video loading with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            // Start loading when video is in viewport
            if (video.readyState >= 2) { // HAVE_CURRENT_DATA
              video.play().catch(e => console.log("Autoplay prevented:", e));
            } else {
              video.load(); // Load the video
              video.addEventListener('canplay', () => {
                video.play().catch(e => console.log("Autoplay prevented:", e));
              }, { once: true });
            }
          } else {
            // Pause when video is out of viewport
            video.pause();
          }
        });
      },
      { 
        threshold: 0.3, // Trigger when 30% of video is visible
        rootMargin: '50px' // Start loading 50px before entering viewport
      }
    );

    if (videoRefs.current) {
      videoRefs.current.forEach((video) => {
        if (video) observer.observe(video);
      });
    }

    return () => {
      if (videoRefs.current) {
        videoRefs.current.forEach((video) => {
          if (video) observer.unobserve(video);
        });
      }
    };
  }, []);

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
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl">
                {/* Using video element with poster attribute for better loading experience */}
                <video
                  ref={(el) => {
                    if (el) {
                      videoRefs.current[index] = el;
                    }
                  }}
                  src={videoSrc}
                  autoPlay={false}
                  loop
                  muted
                  playsInline
                  preload="none" // Don't preload anything initially
                  controls={false}
                  className="w-full h-auto object-cover"
                  style={{ 
                    maxWidth: '100%', 
                    height: 'auto'
                  }}
                  onLoadedData={(e) => {
                    // Ensure optimal playback
                    const video = e.target as HTMLVideoElement;
                    video.playbackRate = 1.0;
                  }}
                  poster="" // Add poster image path for better UX
                />
                {/* Simplified overlay effect */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 pointer-events-none rounded-2xl transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OptimizedVisualStories;