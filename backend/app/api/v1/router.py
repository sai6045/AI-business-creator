"""API v1 router — aggregates all v1 endpoints."""
from fastapi import APIRouter

from app.api.v1.endpoints.health import router as health_router
from app.api.v1.endpoints.users import router as users_router

api_v1_router = APIRouter()

api_v1_router.include_router(health_router, tags=["Health"])
api_v1_router.include_router(users_router, prefix="/users", tags=["Users"])
