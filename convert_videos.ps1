# Batch convert .mov files to web-friendly .mp4 files
# Optimal settings for portfolio quality vs file size

param(
    [string]$SourceDir = "src/assets",
    [string]$BackupDir = "src/assets/original_mov_files"
)

Write-Host "Starting video conversion process..." -ForegroundColor Green

# Create backup directory for original .mov files
if (!(Test-Path $BackupDir)) {
    New-Item -ItemType Directory -Path $BackupDir | Out-Null
    Write-Host "Created backup directory: $BackupDir" -ForegroundColor Yellow
}

# Get all .mov files in the source directory (case insensitive)
$movFiles = Get-ChildItem -Path $SourceDir -Recurse -Include "*.mov", "*.MOV"

if ($movFiles.Count -eq 0) {
    Write-Host "No .mov files found in $SourceDir" -ForegroundColor Red
    exit
}

Write-Host "Found $($movFiles.Count) .mov files to convert" -ForegroundColor Cyan

foreach ($file in $movFiles) {
    $inputPath = $file.FullName
    $outputPath = [System.IO.Path]::ChangeExtension($inputPath, ".mp4")
    
    Write-Host "Converting: $($file.Name)" -ForegroundColor Yellow
    
    # Check if output file already exists
    if (Test-Path $outputPath) {
        Write-Host "  Warning: Output file already exists, skipping..." -ForegroundColor Magenta
        continue
    }
    
    # FFmpeg command with optimized settings:
    # - crf 28: Constant Rate Factor (18-28 range, lower = higher quality)
    # - preset slower: Better compression at the cost of encoding time
    # - profile:v baseline: Maximum compatibility with web browsers
    # - vf scale=1920:-1: Scale to 1920px width, preserve aspect ratio
    # - movflags +faststart: Optimize for web streaming
    
    $ffmpegCmd = "ffmpeg -i `"$inputPath`" -vcodec libx264 -crf 28 -preset slower -profile:v baseline -vf `"scale=1920:-1`" -movflags +faststart `"$outputPath`""
    
    try {
        Invoke-Expression $ffmpegCmd
        Write-Host "  Success: Converted to $($file.BaseName).mp4" -ForegroundColor Green
        
        # Move original .mov file to backup directory
        $backupPath = Join-Path $BackupDir $file.Name
        Move-Item -Path $inputPath -Destination $backupPath
        Write-Host "  Moved original to backup: $backupPath" -ForegroundColor Blue
    }
    catch {
        Write-Host "  Error converting $($file.Name): $_" -ForegroundColor Red
    }
}

Write-Host "Video conversion process completed!" -ForegroundColor Green
Write-Host "Original .mov files have been moved to: $BackupDir" -ForegroundColor Blue