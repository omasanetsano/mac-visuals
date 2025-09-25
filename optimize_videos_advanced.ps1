# Advanced Video Optimization Script for Web Streaming
# This script requires FFmpeg to be installed and available in PATH

Write-Host "Starting advanced video optimization for web streaming..." -ForegroundColor Green

# Create output directory if it doesn't exist
$outputDir = "src/assets/optimized"
if (!(Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir
}

# Get all MP4 files in the assets directory
$videoFiles = Get-ChildItem "src/assets/*.mp4"

foreach ($file in $videoFiles) {
    $inputPath = $file.FullName
    $outputPath = Join-Path $outputDir $file.Name
    
    Write-Host "Optimizing $($file.Name)..." -ForegroundColor Yellow
    
    # Get video information
    $videoInfo = ffprobe -v quiet -print_format json -show_format -show_streams $inputPath | ConvertFrom-Json
    $videoStream = $videoInfo.streams | Where-Object { $_.codec_type -eq "video" }
    
    # Calculate target bitrate based on resolution (lower quality for web)
    $width = [int]$videoStream.width
    $height = [int]$videoStream.height
    $bitrate = if ($width -gt 1920 -or $height -gt 1080) { "2000k" } elseif ($width -gt 1280 -or $height -gt 720) { "1000k" } else { "500k" }
    
    # Advanced optimization for web streaming with multiple techniques:
    # 1. H.264 codec with fast encoding preset
    # 2. Optimized bitrate for web streaming
    # 3. Fast start flag for progressive downloading
    # 4. Audio optimization
    # 5. Keyframe optimization for better seeking
    ffmpeg -i $inputPath `
           -c:v libx264 `
           -profile:v baseline `
           -level 3.0 `
           -pix_fmt yuv420p `
           -b:v $bitrate `
           -maxrate $bitrate `
           -bufsize ($bitrate -replace 'k', '' -as [int] * 2).ToString() + 'k' `
           -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" `
           -preset fast `
           -crf 28 `
           -g 30 `
           -sc_threshold 0 `
           -c:a aac `
           -b:a 96k `
           -ar 44100 `
           -movflags +faststart `
           $outputPath
    
    # Show file size comparison
    $originalSize = [math]::Round($file.Length / 1MB, 2)
    $optimizedSize = if (Test-Path $outputPath) { [math]::Round((Get-Item $outputPath).Length / 1MB, 2) } else { 0 }
    if ($optimizedSize -gt 0) {
        $reduction = [math]::Round((($originalSize - $optimizedSize) / $originalSize) * 100, 2)
        Write-Host "  Original: $($originalSize)MB -> Optimized: $($optimizedSize)MB ($reduction% reduction)" -ForegroundColor Cyan
    } else {
        Write-Host "  Failed to optimize $($file.Name)" -ForegroundColor Red
    }
}

Write-Host "Advanced video optimization complete!" -ForegroundColor Green
Write-Host "Optimized files are in: $outputDir" -ForegroundColor Cyan
Write-Host "To use these optimized videos in your app, update the imports in VisualStories.tsx to point to the optimized versions." -ForegroundColor Yellow