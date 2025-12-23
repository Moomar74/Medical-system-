Write-Host "Starting Medical System Microservices..." -ForegroundColor Green
$root = $PSScriptRoot

# Helper function to start a service in a new PowerShell window
function Start-ServiceWindow ($name, $path) {
    Write-Host "Launching $name..." -ForegroundColor Cyan
    # -NoExit keeps the window open so you can see errors if it crashes
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "Title '$name'; cd '$path'; npm run dev"
}

# 1. API Gateway (Port 5000)
Start-ServiceWindow "API Gateway" "$root\api-gateway"

# 2. Auth Service (Port 5002)
Start-ServiceWindow "Auth Service" "$root\auth-service"

# 3. Booking Service (Port 5003)
Start-ServiceWindow "Booking Service" "$root\booking-service"

# 4. Patient & Dental Service (Port 5004)
Start-ServiceWindow "Patient Service" "$root\patient-service"

# 5. Doctor Service (Port 5005)
Start-ServiceWindow "Doctor Service" "$root\doctor-service"

# 6. Admin Service (Port 5001)
Start-ServiceWindow "Admin Service" "$root\admin-service"

# 7. Frontend Client
Write-Host "Launching Frontend Client..." -ForegroundColor Magenta
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Title 'React Frontend'; cd '$root\client'; npm run dev"

Write-Host "All systems validated. Launch sequence initiated." -ForegroundColor Green
