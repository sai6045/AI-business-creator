# AI Business Creator — Windows Setup Script
# Run from the project root: .\scripts\setup.ps1

param(
    [switch]$SkipDocker,
    [switch]$SkipNpm,
    [switch]$SkipPython
)

$ErrorActionPreference = "Stop"
$ProjectRoot = Split-Path -Parent $PSScriptRoot

Write-Host ""
Write-Host "  ╔═══════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "  ║   AI Business Creator — Setup Script  ║" -ForegroundColor Cyan
Write-Host "  ╚═══════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# ── Copy .env files ────────────────────────────────────────────────────────────
Write-Host "[1/4] Setting up environment files..." -ForegroundColor Yellow

if (-not (Test-Path "$ProjectRoot\.env")) {
    Copy-Item "$ProjectRoot\.env.example" "$ProjectRoot\.env"
    Write-Host "      Created .env from .env.example" -ForegroundColor Green
} else {
    Write-Host "      .env already exists, skipping." -ForegroundColor Gray
}

if (-not (Test-Path "$ProjectRoot\backend\.env")) {
    Copy-Item "$ProjectRoot\backend\.env.example" "$ProjectRoot\backend\.env"
    Write-Host "      Created backend/.env from example" -ForegroundColor Green
} else {
    Write-Host "      backend/.env already exists, skipping." -ForegroundColor Gray
}

if (-not (Test-Path "$ProjectRoot\frontend\.env.local")) {
    Copy-Item "$ProjectRoot\frontend\.env.example" "$ProjectRoot\frontend\.env.local"
    Write-Host "      Created frontend/.env.local from example" -ForegroundColor Green
} else {
    Write-Host "      frontend/.env.local already exists, skipping." -ForegroundColor Gray
}

# ── Frontend dependencies ──────────────────────────────────────────────────────
if (-not $SkipNpm) {
    Write-Host ""
    Write-Host "[2/4] Installing frontend dependencies..." -ForegroundColor Yellow
    Set-Location "$ProjectRoot\frontend"
    npm install
    Set-Location $ProjectRoot
    Write-Host "      Frontend dependencies installed." -ForegroundColor Green
} else {
    Write-Host "[2/4] Skipping npm install." -ForegroundColor Gray
}

# ── Python virtual environment ─────────────────────────────────────────────────
if (-not $SkipPython) {
    Write-Host ""
    Write-Host "[3/4] Setting up Python virtual environment..." -ForegroundColor Yellow
    Set-Location "$ProjectRoot\backend"
    
    if (-not (Test-Path ".venv")) {
        python -m venv .venv
        Write-Host "      Virtual environment created." -ForegroundColor Green
    } else {
        Write-Host "      Virtual environment already exists." -ForegroundColor Gray
    }
    
    .venv\Scripts\Activate.ps1
    pip install --upgrade pip -q
    pip install -r requirements.txt -q
    Write-Host "      Python dependencies installed." -ForegroundColor Green
    Set-Location $ProjectRoot
} else {
    Write-Host "[3/4] Skipping Python setup." -ForegroundColor Gray
}

# ── Docker ─────────────────────────────────────────────────────────────────────
if (-not $SkipDocker) {
    Write-Host ""
    Write-Host "[4/4] Building Docker images..." -ForegroundColor Yellow
    docker-compose build --no-cache
    Write-Host "      Docker images built." -ForegroundColor Green
} else {
    Write-Host "[4/4] Skipping Docker build." -ForegroundColor Gray
}

Write-Host ""
Write-Host "  ✅ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "  Next steps:" -ForegroundColor White
Write-Host "    Start all services:  docker-compose up" -ForegroundColor Cyan
Write-Host "    Frontend only:       cd frontend && npm run dev" -ForegroundColor Cyan
Write-Host "    Backend only:        cd backend && uvicorn main:app --reload" -ForegroundColor Cyan
Write-Host ""
