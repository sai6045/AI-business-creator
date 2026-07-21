"""Request/response logging middleware."""
import time
import uuid
from typing import Callable

from fastapi import Request, Response
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.types import ASGIApp

from app.core.logging import get_logger

logger = get_logger(__name__)


class RequestLoggingMiddleware(BaseHTTPMiddleware):
    """Logs all incoming requests and outgoing responses with timing."""

    def __init__(self, app: ASGIApp) -> None:
        super().__init__(app)

    async def dispatch(self, request: Request, call_next: Callable) -> Response:
        """Process and log each HTTP request/response cycle."""
        request_id = str(uuid.uuid4())[:8]
        start_time = time.perf_counter()

        # Log request
        logger.info(
            "Request started",
            request_id=request_id,
            method=request.method,
            path=request.url.path,
            query=str(request.url.query) if request.url.query else None,
            client_ip=request.client.host if request.client else "unknown",
        )

        response: Response
        try:
            response = await call_next(request)
        except Exception as exc:
            logger.error(
                "Request failed with unhandled exception",
                request_id=request_id,
                method=request.method,
                path=request.url.path,
                error=str(exc),
                exc_info=True,
            )
            raise

        duration_ms = round((time.perf_counter() - start_time) * 1000, 2)

        # Log response
        logger.info(
            "Request completed",
            request_id=request_id,
            method=request.method,
            path=request.url.path,
            status_code=response.status_code,
            duration_ms=duration_ms,
        )

        # Add request ID to response headers
        response.headers["X-Request-ID"] = request_id
        response.headers["X-Process-Time"] = f"{duration_ms}ms"

        return response
