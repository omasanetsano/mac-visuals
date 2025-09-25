// Performance testing script for the videography portfolio website
console.log('Performance Testing Script');
console.log('========================');

// Check if running in browser or Node.js
const isBrowser = typeof window !== 'undefined';

// Function to measure page load time
function measurePageLoad() {
  if (!isBrowser) return;
  
  const start = performance.now();
  
  // Simulate page load completion
  window.addEventListener('load', () => {
    const end = performance.now();
    const loadTime = end - start;
    console.log(`Page loaded in ${loadTime.toFixed(2)} milliseconds`);
    
    // Log performance metrics
    if ('performance' in window) {
      const perfData = performance.getEntriesByType('navigation')[0];
      if (perfData) {
        console.log(`DNS Lookup: ${(perfData.domainLookupEnd - perfData.domainLookupStart).toFixed(2)}ms`);
        console.log(`TCP Connection: ${(perfData.connectEnd - perfData.connectStart).toFixed(2)}ms`);
        console.log(`Request Time: ${(perfData.responseEnd - perfData.requestStart).toFixed(2)}ms`);
        console.log(`Response Time: ${(perfData.responseEnd - perfData.responseStart).toFixed(2)}ms`);
        console.log(`DOM Content Loaded: ${(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart).toFixed(2)}ms`);
        console.log(`Total Load Time: ${(perfData.loadEventEnd - perfData.loadEventStart).toFixed(2)}ms`);
      }
    }
  });
}

// Function to test animation performance
function testAnimationPerformance() {
  if (!isBrowser) return;
  console.log('Testing animation performance...');
  
  // Count the number of animated elements
  const animatedElements = document.querySelectorAll('[data-animate]');
  console.log(`Found ${animatedElements.length} animated elements`);
  
  // Count motion elements
  const motionElements = document.querySelectorAll('[class*="motion"]');
  console.log(`Found ${motionElements.length} motion elements`);
  
  // Check for potential performance issues
  const totalAnimatedElements = animatedElements.length + motionElements.length;
  if (totalAnimatedElements > 150) {
    console.warn('High number of animated elements may impact performance');
  } else {
    console.log('Animation element count is within acceptable range');
  }
}

// Function to test image loading
function testImageLoading() {
  if (!isBrowser) return;
  console.log('Testing image loading performance...');
  
  const images = document.querySelectorAll('img');
  let totalImages = 0;
  let loadedImages = 0;
  let totalSize = 0;
  
  images.forEach(img => {
    totalImages++;
    if (img.complete) {
      loadedImages++;
    }
    
    // Try to get image size if available
    if (img.naturalWidth && img.naturalHeight) {
      // Rough estimation of image size in KB (this is approximate)
      totalSize += (img.naturalWidth * img.naturalHeight * 4) / 1024;
    }
  });
  
  console.log(`Loaded ${loadedImages}/${totalImages} images`);
  console.log(`Estimated total image size: ${Math.round(totalSize / 1024)} MB`);
  
  if (loadedImages === totalImages) {
    console.log('All images loaded successfully');
  } else {
    console.warn('Some images are still loading');
  }
}

// Function to test video loading
function testVideoLoading() {
  if (!isBrowser) return;
  console.log('Testing video loading performance...');
  
  const videos = document.querySelectorAll('video');
  let totalVideos = 0;
  let loadedVideos = 0;
  
  videos.forEach(video => {
    totalVideos++;
    if (video.readyState >= 3) { // HAVE_FUTURE_DATA
      loadedVideos++;
    }
  });
  
  console.log(`Loaded ${loadedVideos}/${totalVideos} videos`);
  
  if (loadedVideos === totalVideos) {
    console.log('All videos loaded successfully');
  } else {
    console.warn('Some videos are still loading');
  }
}

// Run tests when DOM is ready
if (isBrowser) {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Running performance tests...');
    measurePageLoad();
    testAnimationPerformance();
    testImageLoading();
    testVideoLoading();
    
    // Additional performance checks
    console.log('\nAdditional Performance Checks:');
    console.log(`User Agent: ${navigator.userAgent}`);
    console.log(`Screen Resolution: ${screen.width}x${screen.height}`);
    console.log(`Device Pixel Ratio: ${window.devicePixelRatio}`);
    
    // Network information
    if ('connection' in navigator) {
      // @ts-ignore
      const connection = navigator.connection;
      if (connection) {
        console.log(`Network Type: ${connection.effectiveType}`);
        console.log(`Downlink: ${connection.downlink} Mbps`);
        console.log(`RTT: ${connection.rtt} ms`);
        console.log(`Data Saver: ${connection.saveData ? 'Enabled' : 'Disabled'}`);
      }
    }
    
    // Memory usage (if available)
    if ('memory' in performance) {
      // @ts-ignore
      const memory = performance.memory;
      console.log(`Used Memory: ${(memory.usedJSHeapSize / 1048576).toFixed(2)} MB`);
      console.log(`Total Memory: ${(memory.totalJSHeapSize / 1048576).toFixed(2)} MB`);
      console.log(`Memory Limit: ${(memory.jsHeapSizeLimit / 1048576).toFixed(2)} MB`);
    }
    
    // Device information
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    console.log(`Device Type: ${isMobile ? 'Mobile' : 'Desktop'}`);
    
    // Hardware concurrency
    console.log(`CPU Cores: ${navigator.hardwareConcurrency || 'Unknown'}`);
    
    // Device memory (if available)
    // @ts-ignore
    if ('deviceMemory' in navigator) {
      // @ts-ignore
      console.log(`Device Memory: ${navigator.deviceMemory || 'Unknown'} GB`);
    }
  });
}

// Export functions for manual testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    measurePageLoad,
    testAnimationPerformance,
    testImageLoading,
    testVideoLoading
  };
}