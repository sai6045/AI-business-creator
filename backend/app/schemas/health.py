"""Health check Pydantic schemas."""
import enum
from typing import Any, Dict

from pydantic import BaseModel


class HealthStatus(str, enum.Enum):
    """Overall health status."""
    HEALTHY = "healthy"
    DEGRADED = "degraded"
    UNHEALTHY = "unhealthy"


class DatabaseStatus(str, enum.Enum):
    """Database connectivity status."""
    CONNECTED = "connected"
    DISCONNECTED = "disconnected"


class HealthResponse(BaseModel):
    """Health check response schema."""
    status: HealthStatus
    version: str
    environment: str
    uptime_seconds: float
    timestamp: str
    database: Dict[str, Any]

    model_config = {"from_attributes": True}
