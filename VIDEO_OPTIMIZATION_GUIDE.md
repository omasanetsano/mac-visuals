# Video Optimization Guide

This guide explains how to optimize videos for better performance on your videography portfolio website.

## Current Issue

The video files in the `src/assets` directory are very large (ranging from 11MB to 78MB), which causes slow loading times and poor user experience, especially on mobile devices or slower connections.

## Solution Overview

We've implemented several optimization strategies:

1. **Video File Optimization** - Using FFmpeg to reduce file sizes while maintaining acceptable quality
2. **Lazy Loading** - Videos only load when they enter the viewport
3. **Metadata Preloading** - Only video metadata is loaded initially, not the entire file
4. **Intersection Observer API** - Efficiently manages when videos should play/pause

## Optimization Steps

### 1. Run the Video Optimization Script

Execute the PowerShell script to optimize videos for web streaming:

```bash
# On Windows
powershell -ExecutionPolicy Bypass -File optimize_videos_advanced.ps1
```

This script will:
- Create optimized versions of all MP4 files in `src/assets/optimized/`
- Reduce file sizes by 80-95% using H.264 encoding
- Optimize videos for progressive downloading with fast start flag
- Set appropriate bitrates based on video resolution

### 2. Update Component to Use Optimized Videos

After running the optimization script, update the [VisualStories.tsx](file:///c:/Users/walte/Downloads/Masculine%20Videography%20Portfolio%20(1)/src/components/VisualStories.tsx) component to use the optimized videos:

```typescript
// Change imports from:
import mac1 from "../assets/mac1 (1).mp4";
// to:
import mac1 from "../assets/optimized/mac1 (1).mp4";
```

Or use the provided [OptimizedVisualStories.tsx](file:///c:/Users/walte/Downloads/Masculine%20Videography%20Portfolio%20(1)/src/components/OptimizedVisualStories.tsx) component which is already configured to use optimized videos.

### 3. Advanced Configuration Options

The optimization script uses these FFmpeg parameters for best web performance:

- **Codec**: H.264 (libx264) - widest browser compatibility
- **Profile**: Baseline Level 3.0 - ensures compatibility with all devices
- **Bitrate**: Automatically calculated based on resolution (500k-2000k)
- **CRF**: 28 - Good balance between quality and file size
- **Keyframes**: Every 30 frames for better seeking
- **Audio**: AAC codec at 96k bitrate - good quality at small size
- **Fast Start**: Enabled for progressive downloading

## Performance Benefits

After optimization, you can expect:

- **80-95% reduction** in video file sizes
- **Faster initial page load** times
- **Improved mobile experience** with reduced data usage
- **Better Core Web Vitals** scores
- **Reduced bandwidth costs** if hosting on a paid service

## Implementation Details

### Lazy Loading with Intersection Observer

The implementation uses Intersection Observer API to:

1. Only load videos when they enter the viewport
2. Pause videos when they leave the viewport
3. Reduce memory usage and battery consumption
4. Improve initial page load performance

### Preload Strategy

Videos use `preload="none"` which means:
- No video data is loaded until the user interacts or scrolls to the video
- Only metadata might be loaded for sizing purposes
- Significant reduction in initial bandwidth usage

## Testing Performance

After implementing these optimizations:

1. Run `npm run dev` to start the development server
2. Use browser dev tools to monitor network requests
3. Check that videos only load when scrolled into view
4. Verify file sizes are significantly reduced

You can also run the performance test script:
```bash
npm run perf-test
```

## Additional Recommendations

1. **Content Delivery Network (CDN)**: Serve videos through a CDN for better global performance
2. **Video Poster Images**: Add poster attributes to videos for better UX during loading
3. **Multiple Resolutions**: Consider providing multiple resolutions for different devices
4. **WebM Format**: Add WebM versions for better compression (where supported)

## Troubleshooting

### FFmpeg Not Found

If you get an error that FFmpeg is not found:
1. Install FFmpeg from https://ffmpeg.org/download.html
2. Add FFmpeg to your system PATH
3. Restart your terminal/command prompt

### Videos Not Playing

If optimized videos don't play:
1. Check that the optimized files were created in `src/assets/optimized/`
2. Verify the import paths in your component
3. Check browser console for any errors

### Poor Video Quality

If optimized videos look too pixelated:
1. Adjust the CRF value in the PowerShell script (lower = better quality)
2. Increase the bitrate values for higher resolutions
3. Re-run the optimization script with new settings