"""Tests for the health check endpoint."""
import pytest
from httpx import AsyncClient, ASGITransport
from unittest.mock import AsyncMock, patch

from main import app


@pytest.mark.asyncio
async def test_health_endpoint_returns_200() -> None:
    """Health endpoint should return HTTP 200."""
    with patch("app.db.session.get_db") as mock_get_db:
        mock_db = AsyncMock()
        mock_db.execute = AsyncMock()
        mock_get_db.return_value.__aenter__ = AsyncMock(return_value=mock_db)
        mock_get_db.return_value.__aexit__ = AsyncMock(return_value=None)

        async with AsyncClient(
            transport=ASGITransport(app=app), base_url="http://test"
        ) as client:
            response = await client.get("/api/v1/health")

    assert response.status_code == 200
    data = response.json()
    assert "status" in data
    assert "version" in data
    assert "uptime_seconds" in data


@pytest.mark.asyncio
async def test_root_endpoint() -> None:
    """Root endpoint should return API info."""
    async with AsyncClient(
        transport=ASGITransport(app=app), base_url="http://test"
    ) as client:
        response = await client.get("/")

    assert response.status_code == 200
    data = response.json()
    assert "name" in data
    assert "version" in data
