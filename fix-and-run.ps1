# Temporarily rename the corrupted package.json to allow Vite to run
$corruptedFile = "C:\Users\user\package.json"
$backupFile = "C:\Users\user\package.json.backup"

if (Test-Path $corruptedFile) {
    Write-Host "Found corrupted package.json, temporarily renaming it..."
    if (Test-Path $backupFile) {
        Remove-Item $backupFile -Force
    }
    Rename-Item -Path $corruptedFile -NewName "package.json.backup" -Force
    Write-Host "Corrupted file renamed. Starting dev server..."
    
    try {
        npm run dev:direct
    }
    finally {
        # Restore the file after dev server stops
        if (Test-Path $backupFile) {
            Rename-Item -Path $backupFile -NewName "package.json" -Force
            Write-Host "Restored package.json"
        }
    }
} else {
    npm run dev:direct
}

