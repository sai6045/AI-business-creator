"""Health check endpoint."""
import time
from datetime import datetime, timezone

from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import text

from app.core.config import settings
from app.db.session import get_db
from app.schemas.health import HealthResponse, HealthStatus, DatabaseStatus

router = APIRouter()

_start_time = time.time()


@router.get(
    "/health",
    response_model=HealthResponse,
    summary="Health Check",
    description="Returns the operational status of the API and its dependencies.",
)
async def health_check(db: AsyncSession = Depends(get_db)) -> HealthResponse:
    """Comprehensive health check endpoint."""
    uptime_seconds = round(time.time() - _start_time, 2)

    # Check database connectivity
    db_status = DatabaseStatus.CONNECTED
    db_message = "Connected"
    try:
        await db.execute(text("SELECT 1"))
    except Exception as exc:  # noqa: BLE001
        db_status = DatabaseStatus.DISCONNECTED
        db_message = str(exc)

    overall_status = (
        HealthStatus.HEALTHY
        if db_status == DatabaseStatus.CONNECTED
        else HealthStatus.DEGRADED
    )

    return HealthResponse(
        status=overall_status,
        version=settings.APP_VERSION,
        environment=settings.ENVIRONMENT,
        uptime_seconds=uptime_seconds,
        timestamp=datetime.now(tz=timezone.utc).isoformat(),
        database={
            "status": db_status.value,
            "message": db_message,
        },
    )
