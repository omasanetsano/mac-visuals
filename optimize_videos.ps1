# Optimize video files for web streaming
# This script requires FFmpeg to be installed and available in PATH

Write-Host "Optimizing video files for web streaming..." -ForegroundColor Green

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
    
    # Optimize video for web streaming with reduced quality
    ffmpeg -i $inputPath -vcodec libx264 -crf 28 -preset fast -acodec aac -b:a 128k -movflags +faststart $outputPath
    
    # Show file size comparison
    $originalSize = [math]::Round($file.Length / 1MB, 2)
    $optimizedSize = [math]::Round((Get-Item $outputPath).Length / 1MB, 2)
    $reduction = [math]::Round((($originalSize - $optimizedSize) / $originalSize) * 100, 2)
    
    Write-Host "  Original: $($originalSize)MB -> Optimized: $($optimizedSize)MB ($reduction% reduction)" -ForegroundColor Cyan
}

Write-Host "Video optimization complete!" -ForegroundColor Green
Write-Host "Optimized files are in: $outputDir" -ForegroundColor Cyan