#!/usr/bin/env bash
# AI Business Creator — Linux/macOS Setup Script
# Usage: bash scripts/setup.sh

set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && cd .. && pwd)"

echo ""
echo "  ╔═══════════════════════════════════════╗"
echo "  ║   AI Business Creator — Setup Script  ║"
echo "  ╚═══════════════════════════════════════╝"
echo ""

# ── Copy .env files ────────────────────────────────────────────────────────────
echo "[1/4] Setting up environment files..."

[ ! -f "$PROJECT_ROOT/.env" ] && cp "$PROJECT_ROOT/.env.example" "$PROJECT_ROOT/.env" && echo "  Created .env"
[ ! -f "$PROJECT_ROOT/backend/.env" ] && cp "$PROJECT_ROOT/backend/.env.example" "$PROJECT_ROOT/backend/.env" && echo "  Created backend/.env"
[ ! -f "$PROJECT_ROOT/frontend/.env.local" ] && cp "$PROJECT_ROOT/frontend/.env.example" "$PROJECT_ROOT/frontend/.env.local" && echo "  Created frontend/.env.local"

# ── Frontend ───────────────────────────────────────────────────────────────────
echo ""
echo "[2/4] Installing frontend dependencies..."
cd "$PROJECT_ROOT/frontend"
npm install
cd "$PROJECT_ROOT"
echo "  ✓ Frontend dependencies installed"

# ── Python backend ─────────────────────────────────────────────────────────────
echo ""
echo "[3/4] Setting up Python virtual environment..."
cd "$PROJECT_ROOT/backend"

if [ ! -d ".venv" ]; then
    python3 -m venv .venv
    echo "  Virtual environment created"
fi

source .venv/bin/activate
pip install --upgrade pip -q
pip install -r requirements.txt -q
echo "  ✓ Python dependencies installed"
cd "$PROJECT_ROOT"

# ── Docker ─────────────────────────────────────────────────────────────────────
echo ""
echo "[4/4] Building Docker images..."
docker-compose build --no-cache
echo "  ✓ Docker images built"

echo ""
echo "  ✅ Setup complete!"
echo ""
echo "  Next steps:"
echo "    Start all services:  docker-compose up"
echo "    Frontend only:       cd frontend && npm run dev"
echo "    Backend only:        cd backend && uvicorn main:app --reload"
echo ""
