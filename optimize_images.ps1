# Optimize image files for web
# This script requires ImageMagick to be installed and available in PATH

Write-Host "Optimizing image files for web..." -ForegroundColor Green

# Create output directory if it doesn't exist
$outputDir = "src/assets/optimized"
if (!(Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir
}

# Get all image files (PNG, JPG, JPEG)
$imageFiles = Get-ChildItem "src/assets/*" -Include *.png,*.jpg,*.jpeg

foreach ($file in $imageFiles) {
    $inputPath = $file.FullName
    $outputPath = Join-Path $outputDir $file.Name
    
    Write-Host "Optimizing $($file.Name)..." -ForegroundColor Yellow
    
    # Optimize image with reduced quality for web
    magick convert $inputPath -quality 80 -strip $outputPath
    
    # Show file size comparison
    $originalSize = [math]::Round($file.Length / 1KB, 2)
    $optimizedSize = [math]::Round((Get-Item $outputPath).Length / 1KB, 2)
    $reduction = [math]::Round((($originalSize - $optimizedSize) / $originalSize) * 100, 2)
    
    Write-Host "  Original: $($originalSize)KB -> Optimized: $($optimizedSize)KB ($reduction% reduction)" -ForegroundColor Cyan
}

Write-Host "Image optimization complete!" -ForegroundColor Green
Write-Host "Optimized files are in: $outputDir" -ForegroundColor Cyan