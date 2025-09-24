// Performance testing script for the videography portfolio website
console.log('Performance Testing Script');
console.log('========================');

// Function to measure page load time
function measurePageLoad() {
  const start = performance.now();
  
  // Simulate page load completion
  window.addEventListener('load', () => {
    const end = performance.now();
    const loadTime = end - start;
    console.log(`Page loaded in ${loadTime.toFixed(2)} milliseconds`);
    
    // Log performance metrics
    if ('performance' in window) {
      const perfData = performance.getEntriesByType('navigation')[0];
      console.log(`DNS Lookup: ${(perfData.domainLookupEnd - perfData.domainLookupStart).toFixed(2)}ms`);
      console.log(`TCP Connection: ${(perfData.connectEnd - perfData.connectStart).toFixed(2)}ms`);
      console.log(`Request Time: ${(perfData.responseEnd - perfData.requestStart).toFixed(2)}ms`);
      console.log(`Response Time: ${(perfData.responseEnd - perfData.responseStart).toFixed(2)}ms`);
    }
  });
}

// Function to test animation performance
function testAnimationPerformance() {
  console.log('Testing animation performance...');
  
  // Count the number of animated elements
  const animatedElements = document.querySelectorAll('[data-animate]');
  console.log(`Found ${animatedElements.length} animated elements`);
  
  // Check for potential performance issues
  if (animatedElements.length > 100) {
    console.warn('High number of animated elements may impact performance');
  } else {
    console.log('Animation element count is within acceptable range');
  }
}

// Function to test image loading
function testImageLoading() {
  console.log('Testing image loading performance...');
  
  const images = document.querySelectorAll('img');
  let totalImages = 0;
  let loadedImages = 0;
  
  images.forEach(img => {
    totalImages++;
    if (img.complete) {
      loadedImages++;
    }
  });
  
  console.log(`Loaded ${loadedImages}/${totalImages} images`);
  
  if (loadedImages === totalImages) {
    console.log('All images loaded successfully');
  } else {
    console.warn('Some images are still loading');
  }
}

// Function to test video loading
function testVideoLoading() {
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
  
  // Memory usage (if available)
  if ('memory' in performance) {
    const memory = performance.memory;
    console.log(`Used Memory: ${(memory.usedJSHeapSize / 1048576).toFixed(2)} MB`);
    console.log(`Total Memory: ${(memory.totalJSHeapSize / 1048576).toFixed(2)} MB`);
    console.log(`Memory Limit: ${(memory.jsHeapSizeLimit / 1048576).toFixed(2)} MB`);
  }
});

// Export functions for manual testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    measurePageLoad,
    testAnimationPerformance,
    testImageLoading,
    testVideoLoading
  };
}