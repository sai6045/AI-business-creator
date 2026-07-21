# AI Business Creator — Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT BROWSER                        │
│  React 18 + Vite + TypeScript + Tailwind + Framer Motion    │
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTPS
┌──────────────────────────▼──────────────────────────────────┐
│                     NGINX (Production)                        │
│              Reverse Proxy + Static File Serving              │
└───────────────────────┬──────────────────────────────────────┘
                        │
┌───────────────────────▼──────────────────────────────────────┐
│                   FastAPI Backend (Python)                     │
│          Uvicorn ASGI + Pydantic + SQLAlchemy Async           │
├─────────────────────────────────────────────────────────────┤
│    API v1 Router                                              │
│    ├── /health          Health check                          │
│    ├── /users           User management (stub)                │
│    └── /ai/*            AI modules (coming soon)              │
└───────────────────────┬──────────────────────────────────────┘
                        │
┌───────────────────────▼──────────────────────────────────────┐
│               PostgreSQL 16 (Database)                        │
│           Alembic Migrations + SQLAlchemy ORM                 │
└──────────────────────────────────────────────────────────────┘
```

## Directory Structure

```
ai-business-creator/
├── frontend/                   # React SPA
│   └── src/
│       ├── components/
│       │   ├── ui/             # Reusable primitives
│       │   ├── layout/         # Navbar, Footer
│       │   └── sections/       # Page sections
│       ├── pages/              # Route-level components
│       ├── context/            # React context providers
│       ├── hooks/              # Custom hooks
│       ├── lib/                # Utilities, API client
│       └── types/              # TypeScript definitions
│
├── backend/                    # FastAPI application
│   └── app/
│       ├── api/v1/             # API routes
│       ├── core/               # Config, logging
│       ├── db/                 # Database session
│       ├── models/             # SQLAlchemy models
│       ├── schemas/            # Pydantic schemas
│       ├── services/           # Business logic
│       ├── middleware/         # HTTP middleware
│       └── utils/              # Helpers
│
├── docker/                     # Dockerfiles
├── scripts/                    # Setup automation
└── docs/                       # Documentation
```

## Technology Decisions

| Layer | Technology | Rationale |
|-------|------------|----------|
| Frontend Framework | React 18 | Mature ecosystem, concurrent features |
| Build Tool | Vite | Instant HMR, fast builds |
| Styling | Tailwind CSS | Utility-first, design system friendly |
| Animations | Framer Motion | Production-quality React animations |
| Icons | Lucide React | Consistent, tree-shakeable icon set |
| Backend | FastAPI | Async-first, auto-docs, Pydantic validation |
| ORM | SQLAlchemy 2.0 | Best-in-class Python ORM with async support |
| Migrations | Alembic | Industry standard for SQLAlchemy migrations |
| DB Driver | asyncpg | Fastest PostgreSQL async driver |
| Logging | structlog | Structured, JSON-formatted logging |
| Containerization | Docker + Compose | Portable, reproducible environments |

## API Versioning Strategy

All API endpoints are versioned under `/api/v1/`. Future breaking changes will be introduced under `/api/v2/` while maintaining backward compatibility.

## Future AI Module Integration Points

The backend is scaffolded to receive these AI modules under `app/api/v1/endpoints/`:
- `business_plan.py` — Business plan generation
- `brand_identity.py` — Brand identity creation
- `competitor_analysis.py` — Competitor research
- `financial_model.py` — Financial projections
- `marketing_strategy.py` — Marketing plan generation
- `pitch_deck.py` — Pitch deck creation
```
