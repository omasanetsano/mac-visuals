# Git Workflow: Replace Large .mov Files with Compressed .mp4 Files

## Prerequisites
1. Install FFmpeg and add to PATH
2. Run the convert_videos.ps1 script

## Step-by-Step Git Workflow

### 1. Verify the conversion was successful
```powershell
# Check that .mp4 files were created
ls src/assets/*.mp4

# Check that original .mov files were moved to backup
ls src/assets/original_mov_files/*.mov
```

### 2. Update Git LFS tracking
```powershell
# Remove .mov files from LFS tracking
git lfs untrack "*.mov"
git lfs untrack "*.MOV"

# Add .mp4 files to LFS tracking
git lfs track "*.mp4"
git lfs track "*.MP4"

# Update .gitattributes file
echo "*.mp4 filter=lfs diff=lfs merge=lfs -text" >> .gitattributes
echo "*.MP4 filter=lfs diff=lfs merge=lfs -text" >> .gitattributes
```

### 3. Update Git repository
```powershell
# Stage all changes
git add .

# Commit the changes
git commit -m "Replace .mov files with compressed .mp4 files for better web performance"

# Push to remote repository
git push origin main
```

### 4. Verify the changes
```powershell
# Check LFS status
git lfs ls-files

# Check repository status
git status
```

## Troubleshooting

### If you encounter push timeouts again:
```powershell
# Increase Git buffer size
git config http.postBuffer 1048576000

# Configure longer timeout
git config http.lowSpeedLimit 0
git config http.lowSpeedTime 999999

# Try pushing again
git push origin main
```

### If you need to restore original .mov files:
```powershell
# Copy files back from backup
cp src/assets/original_mov_files/* src/assets/

# Remove .mp4 files
rm src/assets/*.mp4

# Update Git tracking back to .mov files
git lfs untrack "*.mp4"
git lfs track "*.mov"
```