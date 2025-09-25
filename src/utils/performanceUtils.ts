// Utility functions for performance optimization

/**
 * Detects if the device has high performance capabilities
 * @returns boolean indicating if device is high performance
 */
export function isHighPerformanceDevice(): boolean {
  // Check if device has sufficient memory
  if ('deviceMemory' in navigator) {
    // @ts-ignore
    if (navigator.deviceMemory < 4) return false;
  }
  
  // Check if device has sufficient CPU cores
  if (navigator.hardwareConcurrency < 4) return false;
  
  // Check if device is likely mobile (simplified check)
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (isMobile) return false;
  
  // Check screen resolution
  if (window.screen.width < 1024) return false;
  
  return true;
}

/**
 * Returns appropriate CSS classes based on device performance
 * @param highPerformanceClass CSS classes to apply on high performance devices
 * @param lowPerformanceClass CSS classes to apply on low performance devices
 * @returns string of appropriate CSS classes
 */
export function getPerformanceBasedClasses(
  highPerformanceClass: string, 
  lowPerformanceClass: string = ''
): string {
  return isHighPerformanceDevice() ? highPerformanceClass : lowPerformanceClass;
}

/**
 * Checks if reduced motion preference is enabled
 * @returns boolean indicating if reduced motion is preferred
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Checks if data saver mode is enabled
 * @returns boolean indicating if data saver is enabled
 */
export function isDataSaverEnabled(): boolean {
  // @ts-ignore
  if ('connection' in navigator) {
    // @ts-ignore
    const connection = navigator.connection;
    // @ts-ignore
    if (connection && connection.saveData) return true;
  }
  return false;
}