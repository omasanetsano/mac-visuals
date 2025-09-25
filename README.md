# Masculine Videography Portfolio

This is a code bundle for Masculine Videography Portfolio. The original project is available at https://www.figma.com/design/3H5Ys8R2GJFbO6JzWZtX6G/Masculine-Videography-Portfolio.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Performance Optimizations

This portfolio website has been optimized for performance with the following improvements:

### Animation Optimizations
- Reduced the number of animated particles on all pages (Home, About, Experience, Portfolio, Content Creation, Contact)
- Limited background animations to improve frame rates
- Optimized animation durations and easing functions

### Build Optimizations
- Configured Vite build with terser minification
- Enabled CSS code splitting
- Set up manual chunking for vendor, UI, and motion libraries
- Removed console logs and debuggers in production builds

### Asset Optimizations
- Added curved edges to video frames in Visual Stories section
- Implemented hover-based glitch effects for better performance
- Optimized video loading with viewport-based loading and metadata preloading

### Code Optimizations
- Reduced unnecessary re-renders
- Implemented efficient component structures
- Minimized bundle size through tree-shaking
- Added Intersection Observer for video lazy loading

### Video Optimization
- Added advanced video optimization scripts (`optimize_videos_advanced.ps1`) to reduce video file sizes for web streaming
- Implemented lazy loading for videos (only loads when in viewport)
- Set videos to preload only metadata instead of entire files
- Added optimized video encoding with H.264 codec and appropriate bitrates

### Testing
- Added performance testing script (performance-test.js) to monitor load times and resource usage

These optimizations ensure the website loads quickly and runs smoothly across all devices while maintaining its visual appeal.