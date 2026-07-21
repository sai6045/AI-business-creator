# ⚡ AI Business Creator

> Transform any startup idea into a complete business plan with AI — in minutes.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Python 3.12](https://img.shields.io/badge/Python-3.12-blue)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115-009688)](https://fastapi.tiangolo.com)
[![React 18](https://img.shields.io/badge/React-18.3-61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6)](https://typescriptlang.org)

## 🚀 Overview

AI Business Creator is a production-ready SaaS platform that helps entrepreneurs generate complete startup packages using AI. This repository contains the **project foundation** — the full tech stack is wired up and ready for AI feature integration.

## 📦 Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 18, Vite, TypeScript, Tailwind CSS, Framer Motion |
| **Backend** | Python 3.12, FastAPI, SQLAlchemy (async), Pydantic v2 |
| **Database** | PostgreSQL 16, Alembic migrations |
| **DevOps** | Docker, docker-compose, Nginx |

## 🗂️ Project Structure

```
ai-business-creator/
├── frontend/          # React + Vite SPA
├── backend/           # FastAPI application
├── docker/            # Dockerfiles
├── docs/              # Architecture docs
├── scripts/           # Setup automation
├── docker-compose.yml
└── .env.example
```

## ⚡ Quick Start

### Option A: Docker (Recommended)

```bash
# 1. Clone the repo
git clone https://github.com/your-org/ai-business-creator.git
cd ai-business-creator

# 2. Copy environment file
cp .env.example .env

# 3. Start all services
docker-compose up
```

Services will be available at:
- 🌐 **Frontend**: http://localhost:5173
- ⚙️ **Backend API**: http://localhost:8000
- 📚 **API Docs**: http://localhost:8000/api/docs
- 🗄️ **PostgreSQL**: localhost:5432

### Option B: Local Development

**Windows:**
```powershell
.\scripts\setup.ps1
```

**Linux/macOS:**
```bash
bash scripts/setup.sh
```

**Manual setup:**

```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend (new terminal)
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload

# Database migrations
alembic upgrade head
```

## 🔑 Environment Variables

Copy `.env.example` to `.env` and configure:

| Variable | Description | Default |
|----------|-------------|--------|
| `DATABASE_URL` | PostgreSQL connection string | localhost/ai_business_creator |
| `SECRET_KEY` | JWT signing key (change in prod!) | changeme |
| `ALLOWED_ORIGINS` | CORS allowed origins | localhost:5173 |
| `VITE_API_URL` | Frontend API base URL | /api/v1 |

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/v1/health` | Health check + DB status |
| `POST` | `/api/v1/users/` | Create user (stub) |
| `GET` | `/api/v1/users/{id}` | Get user by ID (stub) |

## 📄 Frontend Pages

| Route | Page |
|-------|------|
| `/` | Landing Page |
| `/dashboard` | Dashboard (stub) |
| `/about` | About |
| `/pricing` | Pricing |
| `/contact` | Contact |
| `*` | 404 Not Found |

## 🔧 Development Commands

```bash
# Frontend
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # ESLint

# Backend
uvicorn main:app --reload    # Dev server
pytest                       # Run tests
alembic upgrade head         # Apply migrations
alembic revision --autogenerate -m "description"  # New migration

# Docker
docker-compose up            # Start all
docker-compose up -d         # Detached mode
docker-compose logs -f       # Follow logs
docker-compose down          # Stop all
docker-compose down -v       # Stop + remove volumes
```

## 📋 Roadmap

- [x] Project foundation & architecture
- [x] Frontend UI with React + Tailwind
- [x] Backend API with FastAPI
- [x] Database setup with PostgreSQL
- [x] Docker containerization
- [ ] User authentication (JWT)
- [ ] AI: Business plan generation
- [ ] AI: Brand identity creation
- [ ] AI: Competitor analysis
- [ ] AI: Financial forecasting
- [ ] AI: Marketing strategy
- [ ] AI: Pitch deck generation
- [ ] Payment integration (Stripe)
- [ ] Email notifications

## 📝 License

MIT © AI Business Creator Team
```
